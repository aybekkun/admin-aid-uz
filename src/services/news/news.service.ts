import { $authHost } from "@/api";
import { TGetParams, TResponse } from "../shared";
import { TNews } from "./news.types";

class NewsService {
	get = async (params: TGetParams): Promise<TResponse<TNews>> => {
		const { data } = await $authHost.get("/admin/news", { params });
		return data;
	};
}

export const newsService = new NewsService();
