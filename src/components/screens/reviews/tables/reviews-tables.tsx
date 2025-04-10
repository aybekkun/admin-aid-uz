import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";

import { useReviewsColumns } from "../hooks/use-reviews-columns";
import { TReviews, useGetReviewsQuery } from "@/services/reviews";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const ReviewsTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetReviewsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useReviewsColumns();
	return (
		<DataTable<TReviews>
			title={"Список обращений"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			pagination={{
				defaultCurrent: page,
				total: data?.pagination?.count,
				onChange: (page, limit) => {
					onChangeParams({ page, limit });
				},
			}}
		/>
	);
};
