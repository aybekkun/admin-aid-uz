import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useProjectsColumns } from "../hooks/use-projects-columns";
import { TProjects, useGetProjectsQuery } from "@/services/projects";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const ProjectsTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetProjectsQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useProjectsColumns();
	return (
		<DataTable<TProjects>
			title={"Список отчетов"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/projects/create">
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
