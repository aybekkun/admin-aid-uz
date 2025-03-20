import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useCouncilColumns } from "../hooks/use-council-columns";
import { TCouncil, useGetCouncilQuery } from "@/services/council";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const CouncilTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetCouncilQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useCouncilColumns();
	return (
		<DataTable<TCouncil>
			title={"Список совета"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/council/create">
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
