import { TableActions } from "@/components/shared";
import { TReports } from "@/services/reports";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteReportsMutation } from "@/services/reports";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
export const useReportsColumns = () => {
	const { mutate: deleteReports, isPending } = useDeleteReportsMutation();
	const columns: ColumnsType<TReports> = [
		{
			title: "Name",
			dataIndex: "name",
			key: "title",
		},

		{
			title: "Created At",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate,
		},

		{
			title: "File",
			key: "file",
			dataIndex: "file",
			render: (file) => (
				<a href={file} target="_blank" rel="noopener noreferrer">
					<Button type="primary" icon={<DownloadOutlined />} />,
				</a>
			),
		},
		{
			title: "Actions",
			key: "actions",
			render: (record: TReports) => (
				<TableActions deleteItem={deleteReports} isPending={isPending} type="reports" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
