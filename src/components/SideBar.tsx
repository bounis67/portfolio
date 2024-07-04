import avatar from "../assets/avatar.png";
import { ContactInfo } from "./ContactInfo";
import { SocialNetwork } from "./SocialNetwork";
import { Button, Image } from "antd";
import { Typography } from "antd";
import { Download } from "lucide-react";

const { Title } = Typography;
export const SideBar = () => {
    return (
        <div className="flex w-11/12 flex-col items-center gap-4 rounded-xl bg-white p-7 md:p-16 lg:w-[350px] lg:p-10">
            <div className="">
                <Image src={avatar} className="rounded-xl" />
            </div>

            <Title level={2} className="!my-0">
                John Doe
            </Title>
            <Title level={5} className="!my-0">
                Software Developer
            </Title>
            <SocialNetwork />
            <ContactInfo />
            <Button type="primary" icon={<Download />} size="large">
                Download CV
            </Button>
        </div>
    );
};
