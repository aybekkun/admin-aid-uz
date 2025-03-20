import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
	component: Index,
	beforeLoad: () => {
		throw redirect({
			to: "/news/list",
		});
	},
});

function Index() {
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
		</div>
	);
}
