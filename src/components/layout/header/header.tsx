import { Button, Layout, theme } from "antd";
import { FC, } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useCollapsedStore } from "@/store";
export const Header: FC = () => {
	const { collapsed, setCollapsed } = useCollapsedStore();
	const {
		token: { colorBgContainer },
	} = theme.useToken();

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
		</Layout.Header>
	);
};
