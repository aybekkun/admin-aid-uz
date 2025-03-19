import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TWorker, TWorkerForm } from "./worker.types";

class WorkerService {
	get = async (params: TGetParams): Promise<TResponse<TWorker>> => {
		const { data } = await $authHost.get("/admin/worker", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TWorkerForm>> => {
		const { data } = await $authApi.get(`/admin/worker/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TWorker>> => {
		const { data } = await $authHost.post("/admin/worker", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/worker/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TWorker>> => {
		const { data } = await $authHost.put(`/admin/worker/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const workerService = new WorkerService();
