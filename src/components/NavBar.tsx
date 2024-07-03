import { NavBars } from "../data/NavBars";
import { Button, FloatButton } from "antd";
import { SquareMenu, SquareX } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = ({ mainDivWidth }: { mainDivWidth: number }) => {
    const Location = useLocation();
    const navigation = useNavigate();
    const [IsOpen, setIsOpen] = useState(false);

    return (
        <>
            {mainDivWidth < 1024 && (
                <FloatButton
                    className="top-5 transition-all"
                    icon={
                        IsOpen ? (
                            <SquareX size={20} />
                        ) : (
                            <SquareMenu size={20} />
                        )
                    }
                    onClick={() => setIsOpen(!IsOpen)}
                />
            )}
            <nav
                className={`flex flex-col gap-5 rounded-xl bg-white p-4 transition-all ${mainDivWidth < 1024 && (IsOpen ? "fixed right-5 top-20 drop-shadow-2xl" : "hidden")}`}
            >
                {NavBars.map((nav) => {
                    const IsLocation = Location.pathname === nav.link;
                    return (
                        <Button
                            key={nav.key}
                            onClick={() => {
                                setIsOpen(false);
                                navigation(nav.link);
                            }}
                            className="h-max hover:!bg-[#1677ff] hover:!text-white"
                            type={IsLocation ? "primary" : "default"}
                        >
                            <div className="flex flex-col items-center justify-center">
                                {nav.icon}
                                <p className={`text-lg`}>{nav.name}</p>
                            </div>
                        </Button>
                    );
                })}
            </nav>
        </>
    );
};
