import { App, ConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";

const AntProvider: FC<PropsWithChildren> = ({ children }) => (
	<ConfigProvider>
		<App>{children}</App>
	</ConfigProvider>
);

export default AntProvider;
