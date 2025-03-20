import { FC } from "react";
import { TGetParams } from "@/services/shared";

import { DataTable } from "@/components/ui";
import { Link } from "@tanstack/react-router";
import { Button } from "antd";
import { useMembersColumns } from "../hooks/use-members-columns";
import { TMembers, useGetMembersQuery } from "@/services/members";

type Props = {
	params: TGetParams;
	onChangeParams: (params: TGetParams) => void;
};

export const MembersTables: FC<Props> = ({ params, onChangeParams }) => {
	const { page, limit } = params;
	const { data, isLoading, isFetching } = useGetMembersQuery({ limit: limit ?? 10, page: page ?? 1 });

	const columns = useMembersColumns();
	return (
		<DataTable<TMembers>
			title={"Список членов"}
			rowKey={(record) => record.id}
			columns={columns}
			loading={isLoading || isFetching}
			dataSource={data?.data}
			extra={
				<Link to="/members/create">
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
