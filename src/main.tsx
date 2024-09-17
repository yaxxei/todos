import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RootStoreContextProvider } from "./store/rootStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootStoreContextProvider>
      <App />
    </RootStoreContextProvider>
  </StrictMode>
);
