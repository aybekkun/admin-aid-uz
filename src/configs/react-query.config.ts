import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			staleTime: 0,
			retry: 1,
			retryDelay: 1000,
		},
	},
});
