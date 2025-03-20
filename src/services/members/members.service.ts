import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TMembers, TMembersForm } from "./members.types";

class MembersService {
	get = async (params: TGetParams): Promise<TResponse<TMembers>> => {
		const { data } = await $authHost.get("/admin/list-of-members", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TMembersForm>> => {
		const { data } = await $authApi.get(`/admin/list-of-members/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TMembers>> => {
		const { data } = await $authHost.post("/admin/list-of-members", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/list-of-members/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TMembers>> => {
		const { data } = await $authHost.put(`/admin/list-of-members/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const membersService = new MembersService();
