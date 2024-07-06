import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MainLayout } from "./pages/MainLayout";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";
import { Spin } from "antd";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            console.log("page loaded");
            setLoading(false);
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Spin />
            </div>
        );
    }

    return (
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
    );
};
