import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { TGetParams, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { newsService } from "./news.service";

export const useGetNewsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => newsService.get(params),
		queryKey: ["news", ...Object.values(params)],
		placeholderData: keepPreviousData,
		throwOnError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
			throw error;
		},
	});
};
