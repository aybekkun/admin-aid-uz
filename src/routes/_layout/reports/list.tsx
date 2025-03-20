import { ReportsTables } from "@/components/screens/reports";
import { TGetParams } from "@/services/shared";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reports/list")({
	component: ReportsListComponent,
	validateSearch: (search: TGetParams) => {
		const params: TGetParams = {};
		if (search?.page) params.page = search.page;
		if (search?.limit) params.limit = search.limit;
		return params;
	},
});

function ReportsListComponent() {
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
			<ReportsTables params={params} onChangeParams={onChangeParams} />
		</>
	);
}
