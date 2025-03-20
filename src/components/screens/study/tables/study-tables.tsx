import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useStudyColumns } from "../hooks/use-study-columns";
import { TStudy, useGetStudyQuery } from "@/services/study";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const StudyTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetStudyQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useStudyColumns();
	return (
		<DataTable<TStudy>
			title={"Список исследований"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/study/create">
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
