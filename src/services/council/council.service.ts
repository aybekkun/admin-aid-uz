import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TCouncil, TCouncilForm } from "./council.types";

class CouncilService {
	get = async (params: TGetParams): Promise<TResponse<TCouncil>> => {
		const { data } = await $authHost.get("/admin/council-list", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TCouncilForm>> => {
		const { data } = await $authApi.get(`/admin/council-list/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TCouncil>> => {
		const { data } = await $authHost.post("/admin/council-list", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/council-list/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TCouncil>> => {
		const { data } = await $authHost.put(`/admin/council-list/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const councilService = new CouncilService();
