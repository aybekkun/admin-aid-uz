import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useReportsColumns } from "../hooks/use-reports-columns";
import { TReports, useGetReportsQuery } from "@/services/reports";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const ReportsTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetReportsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useReportsColumns();
	return (
		<DataTable<TReports>
			title={"Список отчетов"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/reports/create">
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
