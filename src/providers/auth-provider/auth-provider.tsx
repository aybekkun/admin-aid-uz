import { AuthContext } from "@/context/auth-context";
import { useAuthStore } from "@/store/use-auth-store";
import { App } from "antd";
import { FC, PropsWithChildren } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user, isAuth, token, signOut } = useAuthStore();
	return (
		<AuthContext.Provider value={{ user, isAuth, token, signOut }}>
			<App>{children}</App>
		</AuthContext.Provider>
	);
};

export default AuthProvider;
