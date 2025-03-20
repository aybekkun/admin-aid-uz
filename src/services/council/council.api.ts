import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { councilService } from "./council.service";

export const useGetCouncilQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => councilService.get(params),
		queryKey: ["council", ...Object.values(params)],
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
export const useGetByIdCouncilQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => councilService.getById(id),
		queryKey: ["council", "id,", id],

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
export const useCreateCouncilMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: councilService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["council"],
			});
			message.success({
				message: "Success",
				description: "Council created successfully",
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

export const useDeleteCouncilMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: councilService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["council"],
			});
			message.success({
				message: "Success",
				description: "Council deleted successfully",
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

export const useUpdateCouncilMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: councilService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["council"],
			});
			message.success({
				message: "Success",
				description: "Council updated successfully",
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
