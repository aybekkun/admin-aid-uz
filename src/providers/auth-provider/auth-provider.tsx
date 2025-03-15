import { AuthContext } from "@/context/auth-context";
import { useAuthStore } from "@/store/use-auth-store";

import { FC, PropsWithChildren, useEffect } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user, isAuth, token, signOut, fetchCheckAuthMe } = useAuthStore();
	useEffect(() => {
		fetchCheckAuthMe();
	}, []);
	return <AuthContext.Provider value={{ user, isAuth, token, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
