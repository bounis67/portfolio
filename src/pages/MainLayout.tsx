import { SideBar } from "../components/SideBar";
import backgroundImage from "../assets/background.jpg";

export const MainLayout = () => {
    return (
        <div
            className="h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <SideBar />
        </div>
    );
};
