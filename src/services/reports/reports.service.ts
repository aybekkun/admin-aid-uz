import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TReports, TReportsForm } from "./reports.types";

class ReportsService {
	get = async (params: TGetParams): Promise<TResponse<TReports>> => {
		const { data } = await $authHost.get("/admin/annual-reports", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TReportsForm>> => {
		const { data } = await $authApi.get(`/admin/annual-reports/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TReports>> => {
		const { data } = await $authHost.post("/admin/annual-reports", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/annual-reports/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TReports>> => {
		const { data } = await $authHost.put(`/admin/annual-reports/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const reportsService = new ReportsService();
