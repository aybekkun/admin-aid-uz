import { FC } from "react";
import { TNews, useGetNewsQuery } from "@/services/news";
import { TGetParams } from "@/services/shared";
import { useNewsColumns } from "../hooks/use-news-columns";
import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const NewTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetNewsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useNewsColumns();
	return (
		<DataTable<TNews>
			title={"Новости"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/news/create">
					<Button>Добавить</Button>
				</Link>
			}
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
