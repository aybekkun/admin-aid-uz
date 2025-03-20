import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/council/$id/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_layout/news/$id/"!</div>;
}
