"use client"

import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import submitUserSignupData from "@/app/actions/submit-signup"
import { useActionState } from "react"
import Link from "next/link"


const SignupFields = () => {

	const [state, formAction, pending] = useActionState(submitUserSignupData, {});

	return (
		<CardContent>
			<form action={formAction} className="space-y-4 mb-4">
				<div className="space-y-2">
					<Label htmlFor="name">Nome</Label>
					<Input
						className="border-border"
						name="name"
						type="text"
						defaultValue={state.name}
						required
					/>
					{
						state.tree?.properties?.name?.errors &&
						(
							<p className="text-sm text-primary font-semibold">
								{state.tree?.properties?.name?.errors}
							</p>
						)
					}
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						className="placeholder:text-sm border-border"
						name="email"
						type="email"
						placeholder="Use seu email institucional"
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
				<div className="space-y-2">
					<Label htmlFor="password">Senha</Label>
					<Input
						className="placeholder:text-sm border-border"
						name="password"
						placeholder="Use pelo menos 8 caracteres"
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
					<div className="text-sm text-primary font-semibold text-destructive bg-destructive/10 p-3 rounded-md">
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
							Cadastrando conta...
						</>
					) : (
						"Cadastrar"
					)}
				</Button>
			</form>
			<Link
				className="text-muted-foreground underline"
				href="/signin"
			>Já tenho uma conta</Link>
		</CardContent>
	)

}

export default SignupFields