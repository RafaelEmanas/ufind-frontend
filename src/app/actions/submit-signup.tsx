// "use server"

// import { signupUser } from "@/services/api"
// import { components } from "@/types/api"
// import { UserSignupFormSchema } from "@/types/zod"
// import { AxiosError } from "axios"
// import { redirect } from "next/navigation"
// import { success, z } from "zod"

// type ResponseCreateUserDTO = components['schemas']['ResponseCreateUserDTO']
// type RequestCreateUserDTO = components['schemas']['RequestCreateUserDTO']

// type SubmitUserSignupActionState = {
//     success?: boolean,
//     message?: string,
//     name?: string,
//     email?: string,
//     password?: string,
//     tree?: {
//         errors?: string[],
//         properties?: {
//             name?: { errors: string[] },
//             email?: {errors: string[] },
//             password?: { errors: string[] }            
//         }
//     }
// }

// export default async function submitUserSignupData(
//     previousState : SubmitUserSignupActionState,
//     form: FormData
// ) : Promise<SubmitUserSignupActionState> {

//     const nameFromForm = form.get("name") as string
//     const emailFromForm = form.get("email") as string
//     const passwordFromForm =  form.get("password") as string

//     const parsedFormData = UserSignupFormSchema.safeParse({
//         name: nameFromForm,
//         email: emailFromForm,
//         password:passwordFromForm 
//     })

//     if(!parsedFormData.success){
//         return {
//             success: false,
//             name: nameFromForm,
//             email: emailFromForm,
//             password: passwordFromForm,
//             tree: z.treeifyError(parsedFormData.error)
//         }
//     }

//     const requestCreateUserDto : RequestCreateUserDTO = parsedFormData.data;

//     try{
//         await signupUser(requestCreateUserDto);

//     } catch(error){
//         if(error instanceof AxiosError){
//             if(error.status==409){
//                 return {
//                     success: false,
//                     message: "Esta conta já está em uso"
//                 }
//             }
//         }

//     }

//     redirect("/email")

// }

"use server"

import { signupUser } from "@/services/api"
import { components } from "@/types/api"
import { UserSignupFormSchema } from "@/types/zod"
import { AxiosError } from "axios"
import { redirect } from "next/navigation"
import { z } from "zod"

type RequestCreateUserDTO = components['schemas']['RequestCreateUserDTO']

type SubmitUserSignupActionState = {
    success?: boolean,
    name?: string,
    message?: string,
    email?: string,
    password?: string,
    tree?: {
        errors?: string[],
        properties?: {
            name?: { errors: string[] },
            email?: {errors: string[] },
            password?: { errors: string[] }            
        }
    }
}

export default async function submitUserSignupData(
    previousState : SubmitUserSignupActionState,
    form: FormData
) : Promise<SubmitUserSignupActionState> {

    const nameFromForm = form.get("name") as string
    const emailFromForm = form.get("email") as string
    const passwordFromForm =  form.get("password") as string

    const parsedFormData = UserSignupFormSchema.safeParse({
        name: nameFromForm,
        email: emailFromForm,
        password:passwordFromForm 
    })

    if(!parsedFormData.success){
        return {
            success: false,
            name: nameFromForm,
            email: emailFromForm,
            password: passwordFromForm,
            tree: z.treeifyError(parsedFormData.error)
        }
    }

    const requestCreateUserDto : RequestCreateUserDTO = parsedFormData.data;
    let successfulSubmission = false;

    try{

        await signupUser(requestCreateUserDto);
        successfulSubmission = true;

    } catch(error){

        if(error instanceof AxiosError){

            //conta já em uso
            if(error.response?.status === 409){
                return {
                    success: false,
                    message: "Esta conta já está em uso.",
                    name: nameFromForm,
                    email: emailFromForm,
                    password: passwordFromForm
                }
            }

        }

        return {
            success: false,
            message: "Ocorreu um erro inesperado. Por favor, tente novamente.",
            name: nameFromForm,
            email: emailFromForm,
            password: passwordFromForm
        }
    }

    if(successfulSubmission){
        redirect("/email")
    }

    return {
        success: false,
        message: "Ação não pôde ser completada.",
        name: nameFromForm,
        email: emailFromForm,
        password: passwordFromForm
    }

}