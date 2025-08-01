"use server"

import { signinUser } from "@/services/api"
import { components } from "@/types/api"
import { UserSigninFormSchema } from "@/types/zod"
import { AxiosError } from "axios"
import { redirect } from "next/navigation"
import z from "zod"

type RequestAuthenticateUserDTO = components['schemas']['RequestAuthenticateUserDTO']
type ResponseAuthenticateUserDTO = components['schemas']['ResponseAuthenticateUserDTO']

type SubmitUserAuthenticationActionState = {
    success?: boolean,
    token?: {
        access: string,
        refresh: string
    },
    message?: string,
    email?: string,
    password?: string,
    tree?: {
        errors?: string[],
        properties?: {
            email?: {errors: string[] },
            password?: { errors: string[] }            
        }
    }
}

export default async function submitUserAuthenticationData(
    previousState : SubmitUserAuthenticationActionState,
    form : FormData
) : Promise<SubmitUserAuthenticationActionState> {


    const emailFromForm = form.get("email") as string;
    const passwordFromForm = form.get("password") as string;

    const parsedFormData = UserSigninFormSchema.safeParse({
        email: emailFromForm,
        password: passwordFromForm
    })

    if(!parsedFormData.success){
        return{
            success: false,
            email: emailFromForm,
            password: passwordFromForm,
            tree: z.treeifyError(parsedFormData.error)
        }
    }

    const requestAuthenticateUserDto : RequestAuthenticateUserDTO = parsedFormData.data;

    try{

        const responseAuthenticateUserDto : ResponseAuthenticateUserDTO = await signinUser(requestAuthenticateUserDto);
        return {
            success: true,
            token: {
                access: responseAuthenticateUserDto.access_token,
                refresh: responseAuthenticateUserDto.refresh_token
            }
        }

    } catch(error){

        if(error instanceof AxiosError){

            // email ou senha incorretos
            if(error.status === 401){
                return {
                    success: false,
                    message: "Email ou senha incorretos",
                    email: emailFromForm,
                    password: passwordFromForm
                }
            }

            // ainda não verificou o email
            if(error.status === 409){
                redirect("/email")
            }

        }

        return {
            success: false,
            message: "Ocorreu um erro inesperado. Por favor, tente novamente.",
            email: emailFromForm,
            password: passwordFromForm
        }
    }
}