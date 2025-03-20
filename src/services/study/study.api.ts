import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { studyService } from "./study.service";

export const useGetStudyQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => studyService.get(params),
		queryKey: ["study", ...Object.values(params)],
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
export const useGetByIdStudyQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => studyService.getById(id),
		queryKey: ["study", "id,", id],

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
export const useCreateStudyMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: studyService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["study"],
			});
			message.success({
				message: "Success",
				description: "Study created successfully",
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

export const useDeleteStudyMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: studyService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["study"],
			});
			message.success({
				message: "Success",
				description: "Study deleted successfully",
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

export const useUpdateStudyMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: studyService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["study"],
			});
			message.success({
				message: "Success",
				description: "Study updated successfully",
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
