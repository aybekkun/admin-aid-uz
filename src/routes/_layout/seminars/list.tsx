import { SeminarsTables } from "@/components/screens/seminars";
import { TGetParams } from "@/services/shared";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/seminars/list")({
	component: SeminarsListComponent,
	validateSearch: (search: TGetParams) => {
		const params: TGetParams = {};
		if (search?.page) params.page = search.page;
		if (search?.limit) params.limit = search.limit;
		return params;
	},
});

function SeminarsListComponent() {
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
			<SeminarsTables params={params} onChangeParams={onChangeParams} />
		</>
	);
}
