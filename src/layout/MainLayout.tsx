import { BackgroundColor } from "../components/BackgroundColor";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Affix, ConfigProvider } from "antd";
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
                    className="!z-10 flex h-full min-h-screen w-full flex-col items-center justify-center gap-5 bg-slate-200 bg-cover bg-fixed bg-center bg-no-repeat py-[5%] lg:flex-row-reverse lg:items-start"
                    ref={ref}
                >
                    {mainDivWidth >= 1024 ? (
                        <div style={{ zIndex: "inherit" }}>
                            <Affix offsetTop={10}>
                                <SideBar />
                            </Affix>
                        </div>
                    ) : (
                        <SideBar />
                    )}
                    <main
                        className="w-11/12 overflow-hidden rounded-xl bg-white !bg-opacity-80 p-16 transition-all lg:w-3/6"
                        style={{ zIndex: "inherit" }}
                    >
                        <Outlet />
                    </main>
                    <div style={{ zIndex: "inherit" }}>
                        <Affix offsetTop={10}>
                            <NavBar mainDivWidth={mainDivWidth} />
                        </Affix>
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};
