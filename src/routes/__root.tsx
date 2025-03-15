import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<ReactQueryDevtools buttonPosition={"bottom-left"} />
			<TanStackRouterDevtools position={"bottom-right"} />
		</>
	),
});
