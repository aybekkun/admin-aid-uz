import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reviews/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/reviews/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/reviews/list"} replace={true} />;
}
