"use server"

import { checkEmailCode } from "@/services/api"
import { components } from "@/types/api"
import { AxiosError } from "axios"

type RequestCheckEmailCodeDTO = components['schemas']['RequestCheckCodeDTO']
type ResponseCheckEmailCodeDTO = components['schemas']['ResponseCheckEmailCodeDTO']

type SubmitEmailCodeActionState = {
	success?: boolean,
	token?: {
		access: string,
		refresh: string
	},
	message?: string,
	code?: string
}

export default async function submitEmailVerificationCode(
	previousState: SubmitEmailCodeActionState,
	form: FormData
): Promise<SubmitEmailCodeActionState> {

	const emailCodeFromForm = form.get("code") as string;
	const requestCheckEmailCodeDto: RequestCheckEmailCodeDTO = { email_code: emailCodeFromForm };

	try {

		const responseCheckEmailCodeDto: ResponseCheckEmailCodeDTO = await checkEmailCode(requestCheckEmailCodeDto);
		return {
			success: true,
			token: {
				access: responseCheckEmailCodeDto.access_token,
				refresh: responseCheckEmailCodeDto.refresh_token
			}
		}

	} catch (error) {

		console.log(error)

		if (error instanceof AxiosError) {

			// código enviado é inválldo
			if (error.status === 400) {
				return {
					success: false,
					message: "Código inválido, observe se escreveu corretamente.",
					code: emailCodeFromForm
				}
			}

		}

		return {
			success: false,
			message: "Ocorreu um erro inesperado. Por favor, tente novamente.",
			code: emailCodeFromForm,
		}

	}

}