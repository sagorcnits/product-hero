import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider.jsx";
import "./index.css";
import Root from "./layout/Root.jsx";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}>
          <Root></Root>
        </RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
