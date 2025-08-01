import AuthLayout from "@/components/auth/auth-layout"
import "@/app/globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<AuthLayout>
			{children}
		</AuthLayout>
	)
}
