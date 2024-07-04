import "./index.css";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MainLayout } from "./pages/MainLayout";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import modifié ici

ReactDOM.createRoot(document.getElementById("root")!)?.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainLayout />}>
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="works" element={<Works />} />
                    <Route path="*" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
