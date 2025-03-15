import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
// import { Header, InnerLayout, MainContent, MainLayout, Sidebar } from "src/components/layout";
// import { ROUTES } from "src/config/routes.config";

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
	beforeLoad: ({ context }) => {
		if (!context?.auth?.isAuth) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.pathname,
				},
			});
		}
	},
});

function LayoutComponent() {
	return (
		<>
			<header>top</header>
			<main>
				<Outlet />
			</main>
			<footer>footer</footer>
		</>
	);
}
