"use client"

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {

	const pathname = usePathname();
	const router = useRouter();

	const handleGoBack = () =>{
		if(pathname==="/signup"){
			router.replace("/");
		}
		if(pathname==="/signin"){
			router.replace("/signup");
		}
		if(pathname==="/email"){
			router.back();
		}
	}

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center">
					<div className="flex justify-center mb-4">
						<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
							<Search className="h-6 w-6 text-primary-foreground" />
						</div>
					</div>
					<h1 className="text-4xl font-bold text-foreground">UFind</h1>
				</div>
				{children}
				<div className="flex justify-center text-center space-y-2">
					<Button
						variant="ghost"
						onClick={handleGoBack}
						className="text-sm text-muted-foreground hover:text-foreground block hover:cursor-pointer"
					>
						← Voltar
					</Button>
				</div>
			</div>
		</div>
	)

}

export default AuthLayout;