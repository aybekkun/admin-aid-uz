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
			render: (record: TMembers) => (
				<TableActions deleteItem={deleteMembers} isPending={isPending} type="members" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
