import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TProjects, TProjectsForm } from "./projects.types";

class ProjectsService {
	get = async (params: TGetParams): Promise<TResponse<TProjects>> => {
		const { data } = await $authHost.get("/admin/projects", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TProjectsForm>> => {
		const { data } = await $authApi.get(`/admin/projects/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TProjects>> => {
		const { data } = await $authHost.post("/admin/projects", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/projects/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TProjects>> => {
		const { data } = await $authHost.put(`/admin/projects/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const projectsService = new ProjectsService();
