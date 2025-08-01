import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthCardHeaderProps {
    children?: React.ReactNode
    title: string
    description: string
}

const AuthCardHeader = ({children, title, description} : AuthCardHeaderProps) =>{


    return(
        <CardHeader className="text-center">
            {children}
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
        </CardHeader>
    )

}

export default AuthCardHeader;