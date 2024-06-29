import { NavBars } from "../data/NavBars";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const Location = useLocation();
    const navigation = useNavigate();

    return (
        <nav className="flex flex-col gap-5 rounded-xl bg-white p-4 transition-all">
            {NavBars.map((nav) => {
                const IsLocation = Location.pathname === nav.link;
                return (
                    <Button
                        key={nav.key}
                        onClick={() => navigation(nav.link)}
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
    );
};
