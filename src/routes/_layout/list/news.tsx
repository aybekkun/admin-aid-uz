import { NewTables } from "@/components/screens/news/tables/new-tables";
import { TGetParams } from "@/services/shared";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/list/news")({
	component: NewListComponent,
	validateSearch: (search: TGetParams) => {
		const params: TGetParams = {};
		if (search?.page) params.page = search.page;
		if (search?.limit) params.limit = search.limit;
		return params;
	},
});

function NewListComponent() {
	const params = Route.useSearch();
	const navigate = Route.useNavigate();

	const onChangeParams = (params: TGetParams) => {
		navigate({
			search: (prev) => ({
				...prev,
				...params,
			}),
		});
	};
	return (
		<>
			<NewTables params={params} onChangeParams={onChangeParams} />
		</>
	);
}
