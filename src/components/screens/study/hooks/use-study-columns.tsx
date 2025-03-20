import { TableActions } from "@/components/shared";
import { TStudy } from "@/services/study";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteStudyMutation } from "@/services/study";
import { Image } from "antd";

export const useStudyColumns = () => {
	const { mutate: deleteStudy, isPending } = useDeleteStudyMutation();
	const columns: ColumnsType<TStudy> = [
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
			render: (record: TStudy) => (
				<TableActions
					deleteItem={deleteStudy}
					isPending={isPending}
					type="study"
					id={record.id}
					record={record}
				/>
			),
		},
	];
	return columns;
};
