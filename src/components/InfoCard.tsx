import { Card, Divider, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    key: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
    icon,
    title,
    description,
    key,
}) => {
    return (
        <Card key={key}>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
                <div className="p-">{icon}</div>
                <Divider type="vertical" />
                <div>
                    <Title level={3} className="text-center sm:text-start">
                        {title}
                    </Title>
                    <Paragraph className="text-center text-lg sm:text-start">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </Card>
    );
};

export default InfoCard;
