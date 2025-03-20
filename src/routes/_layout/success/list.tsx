import { SuccessTables } from "@/components/screens/success";
import { TGetParams } from "@/services/shared";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/success/list")({
	component: SuccessListComponent,
	validateSearch: (search: TGetParams) => {
		const params: TGetParams = {};
		if (search?.page) params.page = search.page;
		if (search?.limit) params.limit = search.limit;
		return params;
	},
});

function SuccessListComponent() {
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
			<SuccessTables params={params} onChangeParams={onChangeParams} />
		</>
	);
}
