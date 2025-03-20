import { CouncilForm } from "@/components/screens/council";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/council/create")({
	component: CouncilCreateComponent,
});

function CouncilCreateComponent() {
	return (
		<div>
			<CouncilForm />
		</div>
	);
}
