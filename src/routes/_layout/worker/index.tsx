import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/worker/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/worker/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/worker/list"} replace={true} />;
}
