import { TableActions } from "@/components/shared";
import { TNews } from "@/services/news";
import { formatDate } from "@/utils";
import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDeleteNewsMutation } from "@/services/news";
export const useNewsColumns = () => {
	const { mutate: deleteNews, isPending } = useDeleteNewsMutation();
	const columns: ColumnsType<TNews> = [
		{
			title: "Title",
			dataIndex: "title",
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
			render: (record: TNews) => (
				<TableActions deleteItem={deleteNews} isPending={isPending} type="news" id={record.id} record={record} />
			),
		},
	];
	return columns;
};
