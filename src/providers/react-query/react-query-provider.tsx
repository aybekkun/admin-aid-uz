import { queryClient } from "@/configs/react-query.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
