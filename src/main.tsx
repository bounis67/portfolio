import "./index.css";
import { About } from "./pages/About";
import { MainLayout } from "./pages/MainLayout";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import modifié ici

ReactDOM.createRoot(document.getElementById("root")!)?.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainLayout />}>
                    <Route path="*" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
