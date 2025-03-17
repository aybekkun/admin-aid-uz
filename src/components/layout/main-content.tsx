import { Layout, theme } from "antd";
import { FC, PropsWithChildren } from "react";

export const MainContent: FC<PropsWithChildren> = ({ children }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout.Content
			style={{
				margin: "24px 16px",
				padding: 24,
				minHeight: 280,
				background: colorBgContainer,
				borderRadius: borderRadiusLG,
			}}
		>
			{children}
		</Layout.Content>
	);
};
