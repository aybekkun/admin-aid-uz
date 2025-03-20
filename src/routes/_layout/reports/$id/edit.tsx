
import { ReportsForm } from "@/components/screens/reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reports/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <ReportsForm id={Number(id)} />;
}
