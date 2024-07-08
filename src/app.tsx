import { MainLayout } from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import { Spin } from "antd";
import { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            setLoading(false);
        };

        // Check if the DOM has already been loaded
        if (
            document.readyState === "complete" ||
            document.readyState === "interactive"
        ) {
            onPageLoad();
        } else {
            document.addEventListener("DOMContentLoaded", onPageLoad);
            // Remove event listener on cleanup
            return () =>
                document.removeEventListener("DOMContentLoaded", onPageLoad);
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
            <Suspense
                fallback={
                    <div className="flex h-screen w-screen items-center justify-center">
                        <Spin />
                    </div>
                }
            >
                <Routes>
                    <Route path="*" element={<MainLayout />}>
                        <Route path="skills" element={<Skills />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="works" element={<Works />} />
                        <Route path="*" element={<About />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
