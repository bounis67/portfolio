import { Typography } from "antd";
import { motion, Variants } from "framer-motion";
import React from "react";

const { Title, Paragraph } = Typography;

interface InfoCardProps {
    variants?: Variants; // Replace YourTypeHere with the appropriate type for the variants property.
    icon: React.ReactNode;
    title: string;
    description: string;
    key: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
    variants,
    icon,
    title,
    description,
    key,
}) => {
    return (
        <motion.div variants={variants}>
            <div className="p-4" key={key}>
                <div className="flex flex-col items-stretch gap-5 sm:flex-row">
                    <div className="pr-10">{icon}</div>
                    {/* <Divider type="vertical" /> */}
                    <div>
                        <Title level={3} className="text-center sm:text-start">
                            {title}
                        </Title>
                        <Paragraph className="text-center text-lg sm:text-start">
                            {description}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default InfoCard;
