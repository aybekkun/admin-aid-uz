import { NewsForm } from "@/components/screens/news";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/news/create")({
	component: NewsCreateComponent,
});

function NewsCreateComponent() {
	return (
		<div>
			<NewsForm />
		</div>
	);
}
