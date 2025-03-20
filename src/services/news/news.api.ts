import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
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
				description: error?.response?.data?.errors?.[0],
			});
			throw error;
		},
	});
};
export const useGetByIdNewsQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => newsService.getById(id),
		queryKey: ["news", "id", id],

		throwOnError: (error: TResponseError) => {
			console.log(error);
			message.error({
				message: error.message,
				description: error?.response?.data?.errors?.[0],
			});
			throw error;
		},
		enabled: !!id,
	});
};
export const useCreateNewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: newsService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["news"],
			});
			message.success({
				message: "Success",
				description: "News created successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.errors?.[0],
			});
		},
	});
};

export const useDeleteNewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: newsService.delete,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["news"],
			});
			message.success({
				message: "Success",
				description: "News deleted successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.errors?.[0],
			});
		},
	});
};

export const useUpdateNewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: newsService.update,
		onSuccess: async () => {
			console.log("Success");
			await queryClient.refetchQueries({
				queryKey: ["news"],
			});
			message.success({
				message: "Success",
				description: "News updated successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.errors?.[0],
			});
		},
	});
};
