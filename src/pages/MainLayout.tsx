import { SideBar } from "../components/SideBar";
import backgroundImage from "../assets/background.jpg";
import { NavBar } from "../components/NavBar";

export const MainLayout = () => {
    return (
        <div
            className="h-screen w-screen flex justify-center items-start bg-cover bg-center bg-no-repeat gap-5 pt-[5%]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <SideBar />
            <main className="w-3/6 bg-white h-5/6 rounded-xl">
                <span></span>
            </main>
            <NavBar />
        </div>
    );
};
