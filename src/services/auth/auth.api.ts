import { useMessage } from "@/hooks";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "./auth.service";
import { ResponseError } from "../shared";

export const useAuthMeQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => authService.checkAuthMe(),
		queryKey: ["login"],
		placeholderData: keepPreviousData,
		throwOnError: (error: ResponseError) => {
			message.success({
				message: error.message,
				description: error?.response?.data?.message,
			});
			throw error;
		},
	});
};

export const useAuthLoginMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: authService.login,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["login"],
			});
			await queryClient.invalidateQueries();
			message.success({
				message: "Success",
				description: "Login successful",
			});
		},
		onError: (error: ResponseError) => {
			message.error({
				message: error.message,
				description: error?.response?.data?.message,
			});
		},
	});
};
