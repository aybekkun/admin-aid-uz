
import { SuccessForm } from "@/components/screens/success";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/success/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <SuccessForm id={Number(id)} />;
}
