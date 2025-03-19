import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/news/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/news/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/news/list"} replace={true} />;
}
