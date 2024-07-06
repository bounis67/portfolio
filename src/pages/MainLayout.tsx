import { BackgroundColor } from "../components/BackgroundColor";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Affix, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [mainDivWidth, setMainDivWidth] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setMainDivWidth(entry.target.clientWidth);
            }
        });
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <>
            <BackgroundColor />
            <ConfigProvider
                theme={{ token: { fontFamily: "SFUIText, sans-serif" } }}
            >
                <div
                    className="!z-10 flex h-full w-full flex-col items-center justify-center gap-5 bg-black bg-cover bg-fixed bg-center bg-no-repeat py-[5%] lg:flex-row lg:items-start"
                    ref={ref}
                >
                    {mainDivWidth >= 1024 ? (
                        <motion.div
                            initial={{ x: -1000, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            style={{ zIndex: "inherit" }}
                        >
                            <Affix offsetTop={10} className="">
                                <SideBar />
                            </Affix>
                        </motion.div>
                    ) : (
                        <div
                            style={{ zIndex: "inherit" }}
                            className="flex justify-center"
                        >
                            <SideBar />
                        </div>
                    )}
                    <main
                        className="w-11/12 overflow-hidden rounded-xl bg-white p-10 transition-all lg:w-3/6"
                        style={{ zIndex: "inherit" }}
                    >
                        <Outlet />
                    </main>
                    <motion.div
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ zIndex: "inherit" }}
                    >
                        <Affix offsetTop={10}>
                            <NavBar mainDivWidth={mainDivWidth} />
                        </Affix>
                    </motion.div>
                </div>
            </ConfigProvider>
        </>
    );
};
