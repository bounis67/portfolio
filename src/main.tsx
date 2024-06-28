import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound.tsx";
import { MainLayout } from "./pages/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: "/*",
        element: <MainLayout />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!)?.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
