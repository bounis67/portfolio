import avatar from "../assets/avatar.png";
import { ContactInfo } from "./ContactInfo";
import { SocialNetwork } from "./SocialNetwork";
import { Button, Image } from "antd";
import { Typography } from "antd";
import { Download } from "lucide-react";

const { Title } = Typography;
export const SideBar = () => {
    return (
        <div className="flex w-11/12 flex-col items-center gap-5 rounded-xl bg-white px-5 py-10 lg:w-[350px]">
            <Image
                src={avatar}
                className="rounded-xl"
                alt=" "
                width={200}
                height={200}
            />

            <Title level={2} className="!m-0">
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
