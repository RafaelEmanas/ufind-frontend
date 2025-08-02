import { Card } from "@/components/ui/card";
import AuthCardHeader from "@/components/auth/card-header";
import SignupFields from "./signup-form";


const SignupComponent = () => {


	return (
		<Card className="border-border">
			<AuthCardHeader
				title="Crie uma conta"
				description="Entre para ver e cadastrar itens perdidos!"
			/>
			<SignupFields />
		</Card>
	)

}

export default SignupComponent;