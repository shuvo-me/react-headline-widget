import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.tsx";
import AppStoreProvider from "./store/AppStoreProvider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
        <App />
      </AppStoreProvider>
    </BrowserRouter>
  </StrictMode>
);
