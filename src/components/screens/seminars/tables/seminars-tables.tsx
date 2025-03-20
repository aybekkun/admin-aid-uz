import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useSeminarsColumns } from "../hooks/use-seminars-columns";
import { TSeminars, useGetSeminarsQuery } from "@/services/seminars";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const SeminarsTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetSeminarsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useSeminarsColumns();
	return (
		<DataTable<TSeminars>
			title={"Список cеминаров"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/seminars/create">
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
