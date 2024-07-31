import { WorksType } from "../data/WorksData";
import { Card, Modal, Tag, Typography } from "antd";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

const { Title, Text } = Typography;

interface WorkCardProps {
    work: WorksType;
    AnimationCard: Variants;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, AnimationCard }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <motion.div
            key={work.id}
            variants={AnimationCard}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className="xl:w-[45%] 2xl:w-[40%]"
        >
            <Card
                cover={<img alt={work.title} src={work.img} />}
                className="cursor-pointer"
                onClick={showModal}
            >
                <div className="flex flex-col gap-3">
                    <Title level={4}>{work.title}</Title>
                    <Text>{work.description}</Text>
                    <div className="flex flex-wrap gap-1">
                        {work.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </Card>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={() => {
                    window.open(work.url, "_blank");
                }}
                okType="primary"
                okText="Ouvrir le projet"
                className="!w-3/4 lg:!w-1/2 2xl:!w-5/12"
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <div>{work.modalContent}</div>
            </Modal>
        </motion.div>
    );
};

export default WorkCard;
