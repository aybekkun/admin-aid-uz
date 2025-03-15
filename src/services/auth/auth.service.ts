import { $host } from "@/api";
import { TAuthLogin, TAuthResponse } from "./auth.types";

class AuthService {
	login = async (form: TAuthLogin) => {
		const { data } = await $host.post<TAuthResponse>("/login", form);
		return data;
	};
	checkAuthMe = async () => {
		const { data } = await $host.get<TAuthResponse>("/profile");
		return data;
	};
}

export const authService = new AuthService();
