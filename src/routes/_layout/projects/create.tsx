import { ProjectsForm } from "@/components/screens/projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/projects/create")({
	component: ProjectsCreateComponent,
});

function ProjectsCreateComponent() {
	return (
		<div>
			<ProjectsForm />
		</div>
	);
}
