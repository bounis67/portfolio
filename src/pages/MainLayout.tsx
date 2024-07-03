import backgroundImage from "../assets/background.jpg";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Affix } from "antd";
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
        <div
            className="flex h-full w-full flex-col items-center justify-center gap-16 bg-cover bg-fixed bg-center bg-no-repeat py-[7%] lg:flex-row lg:items-start"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            ref={ref}
        >
            {mainDivWidth > 1230 ? (
                <Affix offsetTop={10}>
                    <SideBar />
                </Affix>
            ) : (
                <SideBar />
            )}
            <main className="w-11/12 rounded-xl bg-white px-5 py-10 lg:w-3/6">
                <Outlet />
            </main>

            <Affix offsetTop={10}>
                <NavBar mainDivWidth={mainDivWidth} />
            </Affix>
        </div>
    );
};
