
import { MembersForm } from "@/components/screens/members";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/members/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <MembersForm id={Number(id)} />;
}
