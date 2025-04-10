import { $authApi, $authHost } from "@/api";
import { TGetParams, TParamId, TResponse } from "../shared";
import { TReviews, TReviewsForm } from "./reviews.types";

class ReviewsService {
	get = async (params: TGetParams): Promise<TResponse<TReviews>> => {
		const { data } = await $authHost.get("/admin/reviews", { params });
		return data;
	};
	getById = async (id: TParamId): Promise<TResponse<TReviewsForm>> => {
		const { data } = await $authApi.get(`/admin/reviews/${id}`);
		return data;
	};
	create = async (form: FormData): Promise<TResponse<TReviews>> => {
		const { data } = await $authHost.post("/admin/reviews", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
	delete = async (id: TParamId) => {
		const { data } = await $authHost.delete(`/admin/reviews/${id}`);
		return data;
	};
	update = async (updateData: { id: TParamId; form: FormData }): Promise<TResponse<TReviews>> => {
		const { data } = await $authHost.put(`/admin/reviews/${updateData.id}`, updateData.form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	};
}

export const reviewsService = new ReviewsService();
