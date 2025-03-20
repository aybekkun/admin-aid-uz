import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TSuccess, TSuccessForm } from "./success.types";

class SuccessService {
	get = async (params: TGetParams): Promise<TResponse<TSuccess>> => {
		const { data } = await $authHost.get("/admin/success-stories", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TSuccessForm>> => {
		const { data } = await $authApi.get(`/admin/success-stories/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TSuccess>> => {
		const { data } = await $authHost.post("/admin/success-stories", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/success-stories/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TSuccess>> => {
		const { data } = await $authHost.put(`/admin/success-stories/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const successService = new SuccessService();
