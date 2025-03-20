import { SuccessForm } from "@/components/screens/success";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/success/create")({
	component: SuccessCreateComponent,
});

function SuccessCreateComponent() {
	return (
		<div>
			<SuccessForm />
		</div>
	);
}
