import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TGetParams, TParamId, TResponseError } from "../shared";
import { useMessage } from "@/hooks";
import { membersService } from "./members.service";

export const useGetMembersQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => membersService.get(params),
		queryKey: ["members", ...Object.values(params)],
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
export const useGetByIdMembersQuery = (id: TParamId) => {
	const { message } = useMessage();

	return useQuery({
		queryFn: () => membersService.getById(id),
		queryKey: ["members", "id,", id],

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
export const useCreateMembersMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: membersService.create,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["members"],
			});
			message.success({
				message: "Success",
				description: "Members created successfully",
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

export const useDeleteMembersMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: membersService.delete,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["members"],
			});
			message.success({
				message: "Success",
				description: "Members deleted successfully",
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

export const useUpdateMembersMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: membersService.update,
		onSuccess: async () => {
			await queryClient.refetchQueries({
				queryKey: ["members"],
			});
			message.success({
				message: "Success",
				description: "Members updated successfully",
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
