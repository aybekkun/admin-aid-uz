import { NewsForm } from "@/components/screens/news";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/news/$id/edit")({
	component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

	return <NewsForm id={Number(id)} />;
}
