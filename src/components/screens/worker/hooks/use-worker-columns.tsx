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
			title: "Название",
			dataIndex: "full_name",
			key: "title",
		},
		{
			title: "Должность",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "Описание",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Фото",
			dataIndex: "image",
			key: "image",
			render: (image) => <Image width={30} height={30} src={image} />,
		},
		{
			title: "Создан",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate,
		},
		{
			title: "Действия",
			key: "actions",
			render: (record: TWorker) => (
				<TableActions deleteItem={deleteWorker} isPending={isPending} type="worker" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
