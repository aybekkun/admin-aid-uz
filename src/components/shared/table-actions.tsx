import { TParamId } from "@/services/shared";
import { DeleteOutlined, EditOutlined /* EyeOutlined */ } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";

import { Button, Flex, Popconfirm, Tooltip } from "antd";
interface TableActionsProps<T extends object> {
	type: "news" | "users" | "worker" | "council" | "members" | "reports" | "projects" | "success" | "study" | "seminars";
	id: TParamId;
	record?: T;
	isPending: boolean;
	deleteItem: (id: TParamId) => void;
}

const HREF_MAP = {
	news: "/news/$id",
	users: "/users/$id",
	worker: "/worker/$id",
	council: "/council/$id",
	members: "/members/$id",
	reports: "/reports/$id",
	projects: "/projects/$id",
	success: "/success/$id",
	study: "/study/$id",
	seminars: "/seminars/$id",
};

export const TableActions = <T extends object>({ id, type, deleteItem, isPending }: TableActionsProps<T>) => {
	const onDelete = () => {
		deleteItem(id);
	};
	return (
		<Flex gap={"small"}>
			{/* 	<Tooltip title="Посмотреть">
				<Button disabled={isPending} type="primary" shape="circle" size="small" icon={<EyeOutlined />} />
			</Tooltip> */}
			<Tooltip title="Редактировать">
				<Link to={HREF_MAP[type] + "/edit"} params={{ id: String(id) }}>
					<Button disabled={isPending} type="dashed" shape="circle" size="small" icon={<EditOutlined />} />
				</Link>
			</Tooltip>
			<Popconfirm
				title="Удалить?"
				description="Восстановить невозможно"
				onConfirm={onDelete}
				onCancel={() => console.log("cancel")}
				okText="Да"
				cancelText="Нет"
				okButtonProps={{ danger: true }}
			>
				<Tooltip title="Удалить">
					<Button disabled={isPending} danger shape="circle" size="small" icon={<DeleteOutlined />} />
				</Tooltip>
			</Popconfirm>
		</Flex>
	);
};
