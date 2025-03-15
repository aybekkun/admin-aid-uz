import { ConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";

const AntProvider: FC<PropsWithChildren> = ({ children }) => <ConfigProvider>{children}</ConfigProvider>;

export default AntProvider;
