import { TableActions } from "@/components/shared";
import { TMembers } from "@/services/members";
import { formatDate } from "@/utils";
import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDeleteMembersMutation } from "@/services/members";
export const useMembersColumns = () => {
	const { mutate: deleteMembers, isPending } = useDeleteMembersMutation();
	const columns: ColumnsType<TMembers> = [
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
			render: (record: TMembers) => (
				<TableActions deleteItem={deleteMembers} isPending={isPending} type="members" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
