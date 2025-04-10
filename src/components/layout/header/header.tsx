import { Button, Flex, Layout, theme } from "antd";
import { FC } from "react";
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useAuthStore, useCollapsedStore } from "@/store";
import { useNavigate } from "@tanstack/react-router";
export const Header: FC = () => {
	const { collapsed, setCollapsed } = useCollapsedStore();
	const { signOut } = useAuthStore();
	const navigate = useNavigate();
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const onLogout = () => {
		navigate({ to: "/" });
		signOut();
	};
	return (
		<Layout.Header
			style={{
				background: colorBgContainer,
				padding: 0,
				position: "sticky",
				top: 0,
				zIndex: 1,
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Button
				type="text"
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => setCollapsed(!collapsed)}
				style={{
					fontSize: "16px",
					width: 64,
					height: 64,
				}}
			/>
			<Button
				type="text"
				icon={<LogoutOutlined style={{ color: "red" }} />}
				onClick={onLogout}
				style={{
					fontSize: "16px",
					width: 64,
					height: 64,
				}}
			/>
		</Layout.Header>
	);
};
