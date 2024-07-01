import InfoCard from "../components/InfoCard";
import { WhatIDoData } from "../data/WhatIDoData";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export const About = () => {
    return (
        <div className="flex flex-col items-center gap-2 sm:items-start">
            <Title>About</Title>
            <Paragraph className="text-center text-xl sm:text-start">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
            </Paragraph>
            <Paragraph className="text-center text-xl sm:text-start">
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
            </Paragraph>
            <Title level={2}>What I Do !</Title>
            <div className="flex flex-col gap-4">
                {WhatIDoData.map((data, index) => (
                    <InfoCard
                        key={index}
                        description={data.description}
                        icon={data.icon}
                        title={data.title}
                    />
                ))}
            </div>
        </div>
    );
};
