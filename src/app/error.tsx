"use client"

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";


const ErrorPage = ({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) => {

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-background flex items-center justify-center p-4">
			<div className="text-center max-w-md w-full space-y-8">
				<div className="space-y-6">
					<div className="relative">
						<div className="w-24 h-24 mx-auto bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-full flex items-center justify-center mb-6">
							<AlertTriangle className="w-12 h-12 text-destructive animate-pulse" />
						</div>
					</div>

					<div className="space-y-3">
						<h1 className="text-2xl font-semibold text-foreground">
							Algo deu errado
						</h1>

						<p className="text-muted-foreground leading-relaxed text-sm">
							Ocorreu um erro inesperado. Pedimos perdão pelo imprevisto, trabalharemos para que o erro seja resolvido.
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						asChild
						size={"lg"}
						className="group hover:shadow-elegant transition-all duration-300"
					>
						<a href="/">
							<Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
							Voltar ao Início
						</a>
					</Button>

					<Button
						size={"lg"}
						variant="outline"
						onClick={() => reset()}
						className="group hover:shadow-md transition-all duration-300"
					>
						<RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-360 transition-transform duration-500" />
						Tentar Novamente
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;