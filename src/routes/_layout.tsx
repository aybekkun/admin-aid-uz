import { createFileRoute, Outlet } from "@tanstack/react-router";
// import { Header, InnerLayout, MainContent, MainLayout, Sidebar } from "src/components/layout";
// import { ROUTES } from "src/config/routes.config";

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
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
