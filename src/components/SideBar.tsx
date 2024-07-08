import { ContactInfo } from "./ContactInfo";
import { SocialNetwork } from "./SocialNetwork";
import { Image } from "antd";
import { Typography } from "antd";

// import { Download } from "lucide-react";

const { Title } = Typography;
export const SideBar = () => {
    return (
        <div
            className="flex w-11/12 flex-col items-center gap-4 rounded-xl bg-white p-7 md:p-16 lg:w-[350px] lg:p-10"
            style={{ zIndex: "inherit" }}
        >
            <div className="flex items-center">
                <Image
                    className="rounded-lg"
                    width={250}
                    height={250}
                    src={"https://i.postimg.cc/jdBkZS3R/250X250.png"}
                />
            </div>

            <Title level={2} className="!my-0">
                Boehm Corentin
            </Title>
            <Title level={3} className="!my-0">
                Developper Fullstack
            </Title>
            <SocialNetwork />
            <ContactInfo />
            {/* <Button type="primary" icon={<Download />} size="large">
                Download CV
            </Button> */}
        </div>
    );
};
