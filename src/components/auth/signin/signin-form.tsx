"use client"

import submitUserAuthenticationData from "@/app/actions/submit-signin";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";


const SigninFields = () => {

    const router = useRouter()
    const [state, formAction, pending] = useActionState(submitUserAuthenticationData, {})

    useEffect(()=>{

        if(state.success && state.token){
            setAccessTokenToLocalStorage(state.token.access)
            setRefreshTokenToLocalStorage(state.token.refresh)
            router.replace("/")
        }

    }, [state])

    return (
        <CardContent>
            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className="border-border"
                        name="email"
                        type="email"
                        defaultValue={state.email}
                        required
                    />
                    {
                        state.tree?.properties?.email?.errors &&
                        (
                            <p className="text-sm text-primary font-semibold">
                                {state.tree?.properties?.email?.errors}
                            </p>
                        )
                    }
                </div>
                <div className="space-y-2 mb-6">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        className="border-border"
                        type="password"
                        name="password"
                        defaultValue={state.password}
                        required
                    />
                    {
                        state.tree?.properties?.password?.errors &&
                        (
                            <p className="text-sm text-primary font-semibold">
                                {state.tree.properties.password.errors}
                            </p>
                        )
                    }
                </div>

                {state.message && (
                    <div className="text-sm font-semibold text-primary text-destructive bg-destructive/10 py-2 rounded-md">
                        {state.message}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={pending || state.success}
                >
                    {pending || state.success? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Entrando...
                        </>
                    ) : (
                        "Entrar"
                    )}
                </Button>
            </form>
        </CardContent>
    )

}

export default SigninFields;