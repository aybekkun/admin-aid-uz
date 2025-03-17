import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout hasSider style={{ minHeight: "100vh" }}>
			{children}
		</Layout>
	);
};
