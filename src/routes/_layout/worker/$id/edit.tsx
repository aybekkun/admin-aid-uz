
import { WorkerForm } from "@/components/screens/worker";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/worker/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <WorkerForm id={Number(id)} />;
}
