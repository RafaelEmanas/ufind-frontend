import { axiosInstance, secureAxiosInstance } from "@/services/axios";
import type { components, paths } from "@/types/api";

// ========== AUTH ==========

export async function signupUser(
    data: components['schemas']['RequestCreateUserDTO']
): Promise<components['schemas']['ResponseCreateUserDTO']> {
    const response = await axiosInstance.post('/api/v1/auth/signup', data);
    return response.data;
}

export async function signinUser(
    data: components['schemas']['RequestAuthenticateUserDTO']
): Promise<components['schemas']['ResponseAuthenticateUserDTO']> {
    const response = await axiosInstance.post('/api/v1/auth/signin', data);
    return response.data;
}

export async function refreshTokens(
data: components['schemas']['RequestRefreshAccessTokenDTO']): Promise<components['schemas']['ResponseRefreshAccessTokenDTO']> {
    const response = await axiosInstance.post('/api/v1/auth/refresh', data);
    return response.data;
}

export async function checkEmailCode(
    data: components['schemas']['RequestCheckCodeDTO']
): Promise<components['schemas']['ResponseCheckEmailCodeDTO']> {
    const response = await axiosInstance.post('/api/v1/auth/check-code', data);
    return response.data;
}

// ========== ITEMS ==========

export async function getItems(
    query: paths['/api/v1/item']['get']['parameters']['query']
): Promise<components['schemas']['ResponseGetItemsDTO']> {
    const response = await axiosInstance.get('/api/v1/item', { params: query });
    return response.data;
}

export async function getItemByItemId(
    itemId: string
): Promise<components['schemas']['ResponseGetItemByItemIdDTO']> {
    const response = await secureAxiosInstance.get(`/api/v1/item/${itemId}`);
    return response.data;
}