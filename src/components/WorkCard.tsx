import { WorksType } from "../data/WorksData";
import { Card, Tag, Typography } from "antd";
import { motion, Variants } from "framer-motion";
import React from "react";

const { Title, Text } = Typography;

interface WorkCardProps {
    work: WorksType;
    AnimationCard: Variants;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, AnimationCard }) => {
    return (
        <motion.div
            key={work.id}
            variants={AnimationCard}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className="w-full cursor-pointer xl:w-[45%] 2xl:w-[30%]"
        >
            <Card cover={<img alt={work.title} src={work.img} />}>
                <div className="flex flex-col gap-2">
                    <Title level={4}>{work.title}</Title>
                    <Text>{work.description}</Text>
                    <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    <a href={work.url} target="_blank" rel="noreferrer">
                        <Text underline>{work.url}</Text>
                    </a>
                </div>
            </Card>
        </motion.div>
    );
};

export default WorkCard;
