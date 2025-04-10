import {
	CopyOutlined,
	FileOutlined,
	ReadOutlined,
	RiseOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
	WechatOutlined,
} from "@ant-design/icons";
export const useMenuData = () => {
	return [
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
			key: "/worker/list",
			icon: <UserOutlined />,
			label: "Рабочие",
		},
		{
			key: "/council/list",
			icon: <TeamOutlined />,
			label: "Список совета",
		},
		{
			key: "/members/list",
			icon: <TeamOutlined />,
			label: "Список членов",
		},
		{
			key: "/reports/list",
			icon: <UploadOutlined />,
			label: "Годовые отчеты",
		},
		{
			key: "/association-group",
			label: "Деятельность",
			type: "group",
		},
		{
			key: "/projects/list",
			icon: <FileOutlined />,
			label: "Проекты",
		},
		{
			key: "/success/list",
			icon: <RiseOutlined />,
			label: "История успеха",
		},
		{
			key: "/study/list",
			icon: <CopyOutlined />,
			label: "Исследование",
		},
		{
			key: "/seminars/list",
			icon: <VideoCameraOutlined />,
			label: "Семинары и конференции",
		},
		{
			key: "/reviews/list",
			icon: <WechatOutlined />,
			label: "Обращения",
		},
	];
};
