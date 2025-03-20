import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TStudy, TStudyForm } from "./study.types";

class StudyService {
	get = async (params: TGetParams): Promise<TResponse<TStudy>> => {
		const { data } = await $authHost.get("/admin/studies", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TStudyForm>> => {
		const { data } = await $authApi.get(`/admin/studies/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TStudy>> => {
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
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TStudy>> => {
		const { data } = await $authHost.put(`/admin/studies/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const studyService = new StudyService();
