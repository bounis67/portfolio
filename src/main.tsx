import "./index.css";
import { MainLayout } from "./pages/MainLayout.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
