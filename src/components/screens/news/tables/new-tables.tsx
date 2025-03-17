import { FC } from "react";
import { Table } from "antd";

import { useGetNewsQuery } from "@/services/news";
import { TGetParams } from "@/services/shared";
import { useNewsColumns } from "../hooks/use-news-columns";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const NewTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetNewsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useNewsColumns();
	return (
		<Table
			title={() => "Новости"}
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
