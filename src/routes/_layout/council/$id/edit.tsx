
import { CouncilForm } from "@/components/screens/council";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/council/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <CouncilForm id={Number(id)} />;
}
