import { LoginLayout } from "@/components/layout";
import { LoginForm } from "@/components/screens/login";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: LoginComponent,
	beforeLoad: ({ context, search }) => {
		const pathname = "redirect" in search && typeof search.redirect === "string" ? search["redirect"] : null;
		if (context?.auth?.isAuth) {
			throw redirect({
				to: pathname || "/",
			});
		}
	},
});

function LoginComponent() {
	return (
		<LoginLayout>
			<LoginForm />
		</LoginLayout>
	);
}
