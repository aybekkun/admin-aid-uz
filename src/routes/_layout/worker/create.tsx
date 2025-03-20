import { WorkerForm } from "@/components/screens/worker";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/worker/create")({
	component: WorkerCreateComponent,
});

function WorkerCreateComponent() {
	return (
		<div>
			<WorkerForm />
		</div>
	);
}
