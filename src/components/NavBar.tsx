import { Button } from "antd";
import { NavBars } from "../data/NavBars";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const NavBar = () => {
    const Location = useLocation();
    const navigation = useNavigate();
    useEffect(() => {
        console.log(Location);
    }, [Location]);
    return (
        <nav className=" flex flex-col p-6 rounded-xl bg-white gap-5 transition-all">
            {NavBars.map((nav) => {
                const IsLocation = Location.pathname === nav.link;
                return (
                    <Button
                        key={nav.key}
                        onClick={() => navigation(nav.link)}
                        className="h-max hover:!bg-[#1677ff] hover:!text-white"
                        type={IsLocation ? "primary" : "default"}
                    >
                        <div className="flex flex-col justify-center items-center ">
                            {nav.icon}
                            <p className={`text-lg `}>{nav.name}</p>
                        </div>
                    </Button>
                );
            })}
        </nav>
    );
};
