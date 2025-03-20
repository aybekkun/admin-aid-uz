import { MembersForm } from "@/components/screens/members";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/members/create")({
	component: MembersCreateComponent,
});

function MembersCreateComponent() {
	return (
		<div>
			<MembersForm />
		</div>
	);
}
