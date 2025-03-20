import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useSuccessColumns } from "../hooks/use-success-columns";
import { TSuccess, useGetSuccessQuery } from "@/services/success";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const SuccessTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetSuccessQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useSuccessColumns();
	return (
		<DataTable<TSuccess>
			title={"Список успехов"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/success/create">
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
