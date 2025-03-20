import { ReportsForm } from "@/components/screens/reports";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reports/create")({
	component: ReportsCreateComponent,
});

function ReportsCreateComponent() {
	return (
		<div>
			<ReportsForm />
		</div>
	);
}
