import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { projectsService } from "./projects.service";

export const useGetProjectsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => projectsService.get(params),
		queryKey: ["projects", ...Object.values(params)],
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
export const useGetByIdProjectsQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => projectsService.getById(id),
		queryKey: ["projects", "id,", id],

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
export const useCreateProjectsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: projectsService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["projects"],
			});
			message.success({
				message: "Success",
				description: "Projects created successfully",
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

export const useDeleteProjectsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: projectsService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["projects"],
			});
			message.success({
				message: "Success",
				description: "Projects deleted successfully",
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

export const useUpdateProjectsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: projectsService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["projects"],
			});
			message.success({
				message: "Success",
				description: "Projects updated successfully",
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
