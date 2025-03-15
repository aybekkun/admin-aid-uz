import { LoginLayout } from "@/components/layout";
import { LoginForm } from "@/components/screens/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: LoginComponent,
});

function LoginComponent() {
	return (
		<LoginLayout>
			<LoginForm />
		</LoginLayout>
	);
}
