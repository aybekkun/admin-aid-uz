import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reports/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/reports/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/reports/list"} replace={true} />;
}
