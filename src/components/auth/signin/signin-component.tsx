import AuthLayout from "@/components/auth/auth-layout";
import { Card } from "@/components/ui/card";
import AuthCardHeader from "../card-header";
import SigninFields from "./signin-form";

const SigninComponent = () => {


	return (
		<Card className="border-border">
			<AuthCardHeader
				title="Bem-vindo de volta!"
				description="Entre para ver e cadastrar itens perdidos!"
			/>
			<SigninFields />
		</Card>
	)

}

export default SigninComponent;