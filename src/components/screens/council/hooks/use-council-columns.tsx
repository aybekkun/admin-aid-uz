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
			render: (record: TCouncil) => (
				<TableActions deleteItem={deleteCouncil} isPending={isPending} type="council" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
