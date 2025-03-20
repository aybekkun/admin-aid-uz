
import { ProjectsForm } from "@/components/screens/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/projects/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <ProjectsForm id={Number(id)} />;
}
