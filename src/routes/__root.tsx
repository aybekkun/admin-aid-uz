import { AuthContext } from "@/context/auth-context";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	auth?: AuthContext;
}>()({
	component: RootComponent,
});
function RootComponent() {
	return (
		<>
			<Outlet />
			<ReactQueryDevtools buttonPosition={"bottom-left"} />
			<TanStackRouterDevtools position={"bottom-right"} />
		</>
	);
}
