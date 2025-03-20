import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useWorkerColumns } from "../hooks/use-worker-columns";
import { TWorker, useGetWorkerQuery } from "@/services/worker";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const WorkerTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetWorkerQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useWorkerColumns();
	return (
		<DataTable<TWorker>
			title={"Рабочие"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/worker/create">
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
