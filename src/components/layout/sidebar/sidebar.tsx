import { FC } from "react";
import { Layout } from "antd";
import { useCollapsedStore } from "@/store";
import { SidebarMenu } from "./sidebar-menu";

export const Sidebar: FC = () => {
	const { collapsed } = useCollapsedStore();
	return (
		<Layout.Sider
			trigger={null}
			style={{
				overflow: "auto",
				height: "100vh",
				position: "sticky",
				insetInlineStart: 0,
				top: 0,
				bottom: 0,
				scrollbarWidth: "thin",
				scrollbarGutter: "stable",
			}}
			collapsible
			collapsed={collapsed}
		>
			<SidebarMenu />
		
		</Layout.Sider>
	);
};
