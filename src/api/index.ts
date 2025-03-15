import { _API_KEY } from "@/configs/api.config";
import axios, { InternalAxiosRequestConfig } from "axios";

const $authHost = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
});

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem("token");
	const currentLanguage = localStorage.getItem("lang") || "ru";

	config.headers["Accept-Language"] = currentLanguage;
	config.headers.Authorization = `Bearer ${token ?? ""}`;
  
	return config;
});

const $host = axios.create({
	baseURL: _API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
});

export { $host, $authHost };
