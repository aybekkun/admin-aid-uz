import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { reportsService } from "./reports.service";

export const useGetReportsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => reportsService.get(params),
		queryKey: ["reports", ...Object.values(params)],
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
export const useGetByIdReportsQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => reportsService.getById(id),
		queryKey: ["reports", "id,", id],

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
export const useCreateReportsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reportsService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["reports"],
			});
			message.success({
				message: "Success",
				description: "Reports created successfully",
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

export const useDeleteReportsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reportsService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["reports"],
			});
			message.success({
				message: "Success",
				description: "Reports deleted successfully",
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

export const useUpdateReportsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: reportsService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["reports"],
			});
			message.success({
				message: "Success",
				description: "Reports updated successfully",
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
