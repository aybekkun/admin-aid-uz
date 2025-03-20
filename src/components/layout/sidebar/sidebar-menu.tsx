import { FC } from "react";

import { Menu, MenuProps } from "antd";
import { useLocation, useRouter } from "@tanstack/react-router";
import { useMenuData } from "./use-menu-data";
import { useCollapsedStore } from "@/store";
export const SidebarMenu: FC = () => {
	const router = useRouter();
	const { pathname } = useLocation();
	const { collapsed } = useCollapsedStore();
	const menuData = useMenuData();
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
			items={menuData.filter((el) => (collapsed ? el?.type !== "group" : el)) as MenuProps["items"]}
		/>
	);
};
