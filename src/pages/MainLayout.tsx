import backgroundImage from "../assets/background.jpg";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Affix, Typography } from "antd";

const { Text } = Typography;
export const MainLayout = () => {
    const affix = 10;
    return (
        <div
            className="h-ful flex w-full items-start justify-center gap-16 bg-cover bg-fixed bg-center bg-no-repeat pt-[7%]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Affix offsetTop={affix}>
                <SideBar />
            </Affix>
            <main className="w-3/6 rounded-xl bg-white">
                <Text className="text-9xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio aut vero nihil similique sunt aliquid sint adipisci
                    voluptatibus quas libero doloremque quae ipsum illum quos,
                    numquam incidunt quod voluptates quis. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Repellat cum
                    necessitatibus earum optio provident consectetur debitis
                    quo, distinctio, iusto voluptatibus recusandae dignissimos
                    iure expedita itaque laboriosam ad quas reiciendis quis!
                </Text>
            </main>
            <Affix offsetTop={affix}>
                <NavBar />
            </Affix>
        </div>
    );
};
