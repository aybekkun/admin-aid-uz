import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/council/")({
	component: IndexComponent,
	beforeLoad: () => {
		throw redirect({
			href: "/council/list",
			replace: true,
		});
	},
});

function IndexComponent() {
	return <Navigate to={"/council/list"} replace={true} />;
}
