import backgroundImage from "../assets/background.jpg";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Affix } from "antd";
import { useEffect, useRef, useState } from "react";

export const MainLayout = () => {
    const affix = 10;
    const ref = useRef<HTMLDivElement>(null);
    const [MainDivWidth, setMainDivWidth] = useState<number>(0);

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
            className="h-ful flex w-full flex-col items-center justify-center gap-16 bg-cover bg-fixed bg-center bg-no-repeat py-[7%] lg:flex-row lg:items-start"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            ref={ref}
        >
            {MainDivWidth > 1024 ? (
                <Affix offsetTop={affix}>
                    <SideBar />
                </Affix>
            ) : (
                <SideBar />
            )}

            <main className="h-[2000px] w-11/12 rounded-xl bg-white px-5 py-10 lg:w-3/6"></main>
            {MainDivWidth > 1024 && (
                <Affix offsetTop={affix}>
                    <NavBar />
                </Affix>
            )}
        </div>
    );
};
