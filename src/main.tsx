import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Router,
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });

const router = createRouter({ routeTree, history: memoryHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
