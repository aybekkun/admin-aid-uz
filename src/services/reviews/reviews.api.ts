import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { reviewsService } from "./reviews.service";

export const useGetReviewsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => reviewsService.get(params),
		queryKey: ["reviews", ...Object.values(params)],
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
export const useGetByIdReviewsQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => reviewsService.getById(id),
		queryKey: ["reviews", "id,", id],

		throwOnError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.errors?.[0],
			});
			throw error;
		},
		enabled: !!id,
	});
};
export const useCreateReviewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reviewsService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["reviews"],
			});
			message.success({
				message: "Success",
				description: "Reviews created successfully",
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

export const useDeleteReviewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reviewsService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["reviews"],
			});
			message.success({
				message: "Success",
				description: "Reviews deleted successfully",
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

export const useUpdateReviewsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reviewsService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["reviews"],
			});
			message.success({
				message: "Success",
				description: "Reviews updated successfully",
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
