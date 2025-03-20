
import { SeminarsForm } from "@/components/screens/seminars";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/seminars/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return <SeminarsForm id={Number(id)} />;
}
