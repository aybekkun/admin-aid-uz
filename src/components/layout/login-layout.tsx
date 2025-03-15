import { Layout } from "antd";
import { FC, PropsWithChildren } from "react";

const LoginLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
                alignItems: "center",
			}}
		>
			{children}
		</Layout>
	);
};

export { LoginLayout };
