import avatar from "../assets/avatar.png";
import { SocialNetwork } from "./SocialNetwork";
import { ContactInfo } from "./ContactInfo";
import { Button, Image } from "antd";
import { Typography } from "antd";
import { Download } from "lucide-react";
const { Title } = Typography;
export const SideBar = () => {
    return (
        <div className="w-[450px] bg-white p-10 rounded-xl flex flex-col gap-5 items-center">
            <Image
                width={160}
                height={160}
                src={avatar}
                className="rounded-xl"
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
                Download
            </Button>
        </div>
    );
};
