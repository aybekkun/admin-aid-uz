import { FC } from "react";
import {
	CopyOutlined,
	FileOutlined,
	ReadOutlined,
	RiseOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useRouter } from "@tanstack/react-router";
export const SidebarMenu: FC = () => {
	const router = useRouter();
	const { pathname } = useLocation();
	const onSelectMenu = (key: string) => {
		router.navigate({
			href: key,
		});
	};
	return (
		<Menu
			theme="dark"
			mode="inline"
			defaultSelectedKeys={[pathname]}
			selectedKeys={[pathname]}
			onSelect={(item) => onSelectMenu(item.key)}
			items={[
				{
					key: "/news-group",
					label: "Новости",
					type: "group",
				},
				{
					key: "/news/list",
					label: "Список новостей",
					icon: <ReadOutlined />,
				},
				{
					key: "/association",
					type: "group",
					label: "Ассоциация",
				},
				{
					key: "/workers",
					icon: <UserOutlined />,
					label: "Рабочие",
				},
				{
					key: "/councils",
					icon: <TeamOutlined />,
					label: "Список совета",
				},
				{
					key: "/reports",
					icon: <UploadOutlined />,
					label: "Годовые отчеты",
				},
				{
					key: "/association-group",
					label: "Деятельность",
					type: "group",
				},
				{
					key: "/projects",
					icon: <FileOutlined />,
					label: "Годовые отчеты",
				},
				{
					key: "/success",
					icon: <RiseOutlined />,
					label: "История успеха",
				},
				{
					key: "/study",
					icon: <CopyOutlined />,
					label: "Исследование",
				},
				{
					key: "/seminars",
					icon: <VideoCameraOutlined />,
					label: "Семинары и конференции",
				},
			]}
		/>
	);
};
