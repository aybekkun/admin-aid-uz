import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

import path from "path";
// https://vite.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite({ target: "react", autoCodeSplitting: true }), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@/api": path.resolve(__dirname, "src/api/*"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@ui": path.resolve(__dirname, "src/ui"),
			"@services": path.resolve(__dirname, "src/services"),
			"@configs": path.resolve(__dirname, "src/configs"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@store": path.resolve(__dirname, "src/store"),
			"@providers": path.resolve(__dirname, "src/providers"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@constants": path.resolve(__dirname, "src/constants"),
		},
	},
});
