import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/success/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/success/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/success/list"} replace={true} />;
}
