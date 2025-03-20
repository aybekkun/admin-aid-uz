import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/study/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/study/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/members/list"} replace={true} />;
}
