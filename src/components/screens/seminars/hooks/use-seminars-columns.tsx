import { TableActions } from "@/components/shared";
import { TSeminars } from "@/services/seminars";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteSeminarsMutation } from "@/services/seminars";
import { Image } from "antd";

export const useSeminarsColumns = () => {
	const { mutate: deleteSeminars, isPending } = useDeleteSeminarsMutation();
	const columns: ColumnsType<TSeminars> = [
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
			title: "Создан",
			key: "actions",
			render: (record: TSeminars) => (
				<TableActions
					deleteItem={deleteSeminars}
					isPending={isPending}
					type="seminars"
					id={record.id}
					record={record}
				/>
			),
		},
	];
	return columns;
};
