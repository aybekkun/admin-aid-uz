import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { TAuthLogin, TAuthRegister, TAuthResponse } from "@/services/auth";
import { $authHost, $host } from "@/api";

interface AuthState {
	user: TAuthResponse["data"] | null;
	isAuth: boolean;
	token: string | null;
	signOut: () => void;
	fetchCheckAuthMe: () => Promise<void>;
	fetchRegister: (params: TAuthRegister) => Promise<void>;
	fetchLogin: (params: TAuthLogin) => Promise<void>;
}

export const useAuthStore = create(
	devtools(
		persist<AuthState>(
			(set) => ({
				user: null,
				isAuth: false,
				token: null,
				signOut: () => set({ isAuth: false, token: null }),
				fetchCheckAuthMe: async () => {
					try {
						const { data } = await $authHost.get<TAuthResponse>("/profile");
						set({ isAuth: true, user: data.data });
					} catch (e) {
						console.log(e);
						set({ isAuth: false, token: null, user: null });
					}
				},
				setUser: (user: TAuthResponse["data"]) => set({ user }),
				fetchRegister: async (params) => {
					try {
						const { data } = await $host.post<TAuthResponse>("/login", params);
						const token = data.data.token;
						window.localStorage.setItem("token", token);
						set({ isAuth: true, token: data.data.token, user: data.data });
					} catch (error) {
						console.log(error);
						set({ isAuth: false, token: null, user: null });
					}
				},
				fetchLogin: async (params) => {
					try {
						const { data } = await $host.post<TAuthResponse>("/login", params);
						const token = data.data.token;
						window.localStorage.setItem("token", token);
						set({ isAuth: true, token: data.data.token, user: data.data });
					} catch (error) {
						console.log(error);
						set({ isAuth: false, token: null, user: null });
					}
				},
			}),
			{ name: "auth" }
		),
		{ name: "auth" }
	)
);
