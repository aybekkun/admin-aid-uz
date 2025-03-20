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
			title: "Название",
			dataIndex: "name",
			key: "title",
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
