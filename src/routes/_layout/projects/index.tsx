import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/projects/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/projects/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/members/list"} replace={true} />;
}
