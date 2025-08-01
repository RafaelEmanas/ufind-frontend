import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { refreshTokens } from '@/services/api';
import { components } from '@/types/api';
import { deleteAccessTokenFromLocalStorage, deleteRefreshTokenFromLocalStorage, getAccessTokenFromLocalStorage, getRefreshTokenFromLocalStorage, setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from '@/lib/utils';

// === Type definitions ===
type AuthTokens = components['schemas']['ResponseRefreshAccessTokenDTO'];
type QueuedRequest = (accessToken: string | null, error?: any) => void;

// === Core axios instances ===
export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

export const secureAxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

// === State for refresh logic ===
let isRefreshing = false;
let failedRequestQueue: QueuedRequest[] = [];

const addRequestToQueue = (cb: QueuedRequest) => failedRequestQueue.push(cb);
const processQueue = (newToken: string | null, error?: any) => {
	failedRequestQueue.forEach(cb => cb(newToken, error));
	failedRequestQueue = [];
};

secureAxiosInstance.interceptors.request.use((config) => {
	const token = getAccessTokenFromLocalStorage();
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

secureAxiosInstance.interceptors.response.use(
	response => response,
	(error: AxiosError) => {
		const originalConfig = error.config as AxiosRequestConfig & { __isRetryRequest?: boolean };

		if (!error.response || error.response.status !== 401) {
			return Promise.reject(error);
		}

		if (originalConfig.__isRetryRequest) {
			return Promise.reject(error);
		}

		const retryOriginalRequest = new Promise<AxiosResponse>((resolve, reject) => {
			addRequestToQueue((token, err) => {
				if (token) {
					if (!originalConfig.headers) originalConfig.headers = {};
					originalConfig.headers.Authorization = `Bearer ${token}`;
					originalConfig.__isRetryRequest = true;
					resolve(secureAxiosInstance(originalConfig));
				} else {
					reject(err);
				}
			});
		});

		if (!isRefreshing) {
			isRefreshing = true;
			const refreshToken = getRefreshTokenFromLocalStorage();

			if (!refreshToken) {
				processQueue(null, new Error('No refresh token available'));
				isRefreshing = false;
				return Promise.reject(new Error('No refresh token'));
			}

			refreshTokens(
				{ refresh_token: refreshToken }
			)
				.then((resp: AuthTokens) => {
					setAccessTokenToLocalStorage(resp.access_token);
					setRefreshTokenToLocalStorage(resp.refresh_token);
					processQueue(resp.access_token);
				})
				.catch((refreshError) => {
					console.error('Refresh failed:', refreshError);
					deleteAccessTokenFromLocalStorage();
					deleteRefreshTokenFromLocalStorage();
					processQueue(null, refreshError);
				})
				.finally(() => {
					isRefreshing = false;
				});
		}

		return retryOriginalRequest;
	}
);