import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/members/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/members/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/members/list"} replace={true} />;
}
