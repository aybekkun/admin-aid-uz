import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { Providers } from "./providers/providers.tsx";


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<Providers>
		
				<App />
			</Providers>
		</Suspense>
	</StrictMode>
);
