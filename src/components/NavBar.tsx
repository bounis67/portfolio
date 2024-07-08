import { NavBars } from "../data/NavBarsData";
import { Button, FloatButton } from "antd";
import { motion } from "framer-motion";
import { SquareMenu, SquareX } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AnimationNav = {
    hidden: {
        height: 0,
        padding: "0px 16px",
        transition: {
            duration: 0.2,
        },
    },
    visible: {
        padding: "16px 16px",
        height: "max-content",
        display: "flex",
        transition: {
            duration: 0.2,
        },
    },
};
export const NavBar = ({ mainDivWidth }: { mainDivWidth: number }) => {
    const Location = useLocation();
    const navigation = useNavigate();
    const [IsOpen, setIsOpen] = useState(true);
    useEffect(() => {
        if (mainDivWidth > 1024) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [mainDivWidth]);

    return (
        <>
            {mainDivWidth <= 1024 && (
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
            <motion.nav
                className={`z-20 flex w-max flex-col gap-5 overflow-hidden rounded-xl bg-white p-4 ${mainDivWidth <= 1024 ? "fixed right-7 top-16 shadow-2xl" : ""}`}
                variants={AnimationNav}
                initial="hidden"
                animate={IsOpen ? "visible" : "hidden"}
            >
                {NavBars.map((nav) => {
                    const IsLocation = Location.pathname === nav.link;
                    return (
                        <Button
                            key={nav.key}
                            aria-label="nav-bar-button"
                            onClick={() => {
                                if (mainDivWidth <= 1024) {
                                    setIsOpen(false);
                                }

                                navigation(nav.link);
                            }}
                            className="h-max p-3 hover:!bg-[#1677ff] hover:!text-white"
                            type={IsLocation ? "primary" : "default"}
                        >
                            <div className="flex flex-col items-center justify-center">
                                {nav.icon}
                                <p className="">{nav.name}</p>
                            </div>
                        </Button>
                    );
                })}
            </motion.nav>
        </>
    );
};
