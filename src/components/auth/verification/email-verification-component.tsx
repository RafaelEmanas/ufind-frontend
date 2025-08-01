"use client"

import { Card } from "@/components/ui/card";
import AuthCardHeader from "../card-header";
import { Mail } from "lucide-react";
import EmailVerificationField from "./email-verification-form";
import { useActionState } from "react";


const EmailVerificationComponent = () => {

	return (
		<Card className="border-border">
			<AuthCardHeader
				title="Verifique seu email"
				description="Nós mandamos um código de 8 dígitos para seu email. Coloque-o no campo abaixo para ativar sua conta."
			>
				<div className="flex justify-center mb-4">
					<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
						<Mail className="h-8 w-8 text-primary" />
					</div>
				</div>
			</AuthCardHeader>
			<EmailVerificationField/>
		</Card>
	)

}

export default EmailVerificationComponent;