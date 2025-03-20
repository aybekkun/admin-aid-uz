import { TableActions } from "@/components/shared";
import { TWorker } from "@/services/worker";
import { formatDate } from "@/utils";
import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDeleteWorkerMutation } from "@/services/worker";
export const useWorkerColumns = () => {
	const { mutate: deleteWorker, isPending } = useDeleteWorkerMutation();
	const columns: ColumnsType<TWorker> = [
		{
			title: "Name",
			dataIndex: "full_name",
			key: "title",
		},
		{
			title: "Position",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Image",
			dataIndex: "image",
			key: "image",
			render: (image) => <Image width={30} height={30} src={image} />,
		},
		{
			title: "Created At",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate,
		},
		{
			title: "Actions",
			key: "actions",
			render: (record: TWorker) => (
				<TableActions deleteItem={deleteWorker} isPending={isPending} type="worker" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
