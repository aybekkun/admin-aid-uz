import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TSeminars, TSeminarsForm } from "./seminars.types";

class SeminarsService {
	get = async (params: TGetParams): Promise<TResponse<TSeminars>> => {
		const { data } = await $authHost.get("/admin/studies", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TSeminarsForm>> => {
		const { data } = await $authApi.get(`/admin/studies/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TSeminars>> => {
		const { data } = await $authHost.post("/admin/studies", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/studies/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TSeminars>> => {
		const { data } = await $authHost.put(`/admin/studies/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const seminarsService = new SeminarsService();
