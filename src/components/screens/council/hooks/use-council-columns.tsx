import { TableActions } from "@/components/shared";
import { TCouncil } from "@/services/council";
import { formatDate } from "@/utils";
import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDeleteCouncilMutation } from "@/services/council";
export const useCouncilColumns = () => {
	const { mutate: deleteCouncil, isPending } = useDeleteCouncilMutation();
	const columns: ColumnsType<TCouncil> = [
		{
			title: "Название",
			dataIndex: "full_name",
			key: "full_name",
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
			render: (record: TCouncil) => (
				<TableActions deleteItem={deleteCouncil} isPending={isPending} type="council" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
