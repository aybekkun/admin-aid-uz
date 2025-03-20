
import { StudyForm } from "@/components/screens/study";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/study/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <StudyForm id={Number(id)} />;
}
