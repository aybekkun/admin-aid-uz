import { FC, PropsWithChildren } from "react";
import ReactQueryProvider from "./react-query/react-query-provider";
import AntProvider from "./antd/ant-provider";
import AuthProvider from "./auth-provider/auth-provider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AntProvider>
			<ReactQueryProvider>
				<AuthProvider>{children}</AuthProvider>
			</ReactQueryProvider>
		</AntProvider>
	);
};
