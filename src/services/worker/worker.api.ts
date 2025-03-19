import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { workerService } from "./worker.service";

export const useGetWorkerQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => workerService.get(params),
		queryKey: ["worker", ...Object.values(params)],
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
export const useGetByIdWorkerQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => workerService.getById(id),
		queryKey: ["worker", id],

		throwOnError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
			throw error;
		},
		enabled: !!id,
	});
};
export const useCreateWorkerMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: workerService.create,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["worker"],
			});
			message.success({
				message: "Success",
				description: "Worker created successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
		},
	});
};

export const useDeleteWorkerMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: workerService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["worker"],
			});
			message.success({
				message: "Success",
				description: "Worker deleted successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
		},
	});
};

export const useUpdateWorkerMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: workerService.update,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["worker"],
			});
			message.success({
				message: "Success",
				description: "Worker updated successfully",
			});
		},
		onError: (error: TResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
		},
	});
};
