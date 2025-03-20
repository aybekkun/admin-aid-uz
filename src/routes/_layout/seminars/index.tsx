import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/seminars/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/seminars/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/members/list"} replace={true} />;
}
