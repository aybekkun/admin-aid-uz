import { TReviews } from "@/services/reviews";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteReviewsMutation } from "@/services/reviews";
import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const useReviewsColumns = () => {
	const { mutate: deleteReviews, isPending } = useDeleteReviewsMutation();
	const columns: ColumnsType<TReviews> = [
		{
			title: "Фамилия",
			dataIndex: "last_name",
			key: "last_name",
		},
		{
			title: "Имя",
			dataIndex: "first_name",
			key: "first_name",
		},
		{
			title: "Почта",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Текст",
			dataIndex: "message",
			key: "message",
		},
		{
			title: "Создан",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate,
		},
		{
			title: "Действия",
			dataIndex: "id",
			key: "actions",
			render: (id: number) => (
				<Popconfirm
					title="Удалить?"
					description="Восстановить невозможно"
					onConfirm={() => deleteReviews(id)}
					onCancel={() => console.log("cancel")}
					okText="Да"
					cancelText="Нет"
					okButtonProps={{ danger: true }}
				>
					<Tooltip title="Удалить">
						<Button disabled={isPending} danger shape="circle" size="small" icon={<DeleteOutlined />} />
					</Tooltip>
				</Popconfirm>
			),
		},
	];
	return columns;
};
