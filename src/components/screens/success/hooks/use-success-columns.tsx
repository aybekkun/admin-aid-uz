import { TableActions } from "@/components/shared";
import { TSuccess } from "@/services/success";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteSuccessMutation } from "@/services/success";
import { Image } from "antd";

export const useSuccessColumns = () => {
	const { mutate: deleteSuccess, isPending } = useDeleteSuccessMutation();
	const columns: ColumnsType<TSuccess> = [
		{
			title: "Name",
			dataIndex: "name",
			key: "title",
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
			render: (record: TSuccess) => (
				<TableActions
					deleteItem={deleteSuccess}
					isPending={isPending}
					type="success"
					id={record.id}
					record={record}
				/>
			),
		},
	];
	return columns;
};
