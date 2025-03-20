import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { seminarsService } from "./seminars.service";

export const useGetSeminarsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => seminarsService.get(params),
		queryKey: ["seminars", ...Object.values(params)],
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
export const useGetByIdSeminarsQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => seminarsService.getById(id),
		queryKey: ["seminars", "id,", id],

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
export const useCreateSeminarsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: seminarsService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["seminars"],
			});
			message.success({
				message: "Success",
				description: "Seminars created successfully",
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

export const useDeleteSeminarsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: seminarsService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["seminars"],
			});
			message.success({
				message: "Success",
				description: "Seminars deleted successfully",
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

export const useUpdateSeminarsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: seminarsService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["seminars"],
			});
			message.success({
				message: "Success",
				description: "Seminars updated successfully",
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
