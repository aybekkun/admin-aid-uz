import { SeminarsForm } from "@/components/screens/seminars";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/seminars/create")({
	component: SeminarsCreateComponent,
});

function SeminarsCreateComponent() {
	return (
		<div>
			<SeminarsForm />
		</div>
	);
}
