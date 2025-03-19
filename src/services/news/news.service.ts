import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TNews, TNewsForm } from "./news.types";

class NewsService {
	get = async (params: TGetParams): Promise<TResponse<TNews>> => {
		const { data } = await $authHost.get("/admin/news", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TNewsForm>> => {
		const { data } = await $authApi.get(`/admin/news/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TNews>> => {
		const { data } = await $authHost.post("/admin/news", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/news/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TNews>> => {
		const { data } = await $authHost.put(`/admin/news/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const newsService = new NewsService();
