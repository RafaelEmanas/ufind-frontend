"use client"

import submitEmailVerificationCode from "@/app/actions/submit-verification";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";


const EmailVerificationField = () => {

    const router = useRouter();
    const [state, formAction, pending] = useActionState(submitEmailVerificationCode, {})

    useEffect(()=>{

        if(state.success && state.token){
            setAccessTokenToLocalStorage(state.token.access);
            setRefreshTokenToLocalStorage(state.token.refresh);
            router.replace("/");
        }

    }, [state])

    return (
        <CardContent>
            <form action={formAction} className="space-y-6">
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <InputOTP
                            required
                            name="code"
                            maxLength={8}
                            defaultValue={state.code}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                                <InputOTPSlot index={6} />
                                <InputOTPSlot index={7} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    {state.message && (
                        <div className="text-sm font-semibold text-primary text-destructive bg-destructive/10 p-3 rounded-md text-center">
                            {state.message}
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={pending || state.success}
                >
                    {pending || state.success ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verificando...
                        </>
                    ) : (
                        "Verificar"
                    )}
                </Button>

            </form>
        </CardContent>
    )

}

export default EmailVerificationField;