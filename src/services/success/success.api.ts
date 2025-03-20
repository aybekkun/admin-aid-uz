import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { successService } from "./success.service";

export const useGetSuccessQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => successService.get(params),
		queryKey: ["success", ...Object.values(params)],
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
export const useGetByIdSuccessQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => successService.getById(id),
		queryKey: ["success", "id,", id],

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
export const useCreateSuccessMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: successService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["success"],
			});
			message.success({
				message: "Success",
				description: "Success created successfully",
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

export const useDeleteSuccessMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: successService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["success"],
			});
			message.success({
				message: "Success",
				description: "Success deleted successfully",
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

export const useUpdateSuccessMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: successService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["success"],
			});
			message.success({
				message: "Success",
				description: "Success updated successfully",
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
