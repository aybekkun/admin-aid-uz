import { StudyForm } from "@/components/screens/study";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/study/create")({
	component: StudyCreateComponent,
});

function StudyCreateComponent() {
	return (
		<div>
			<StudyForm />
		</div>
	);
}
