import { SkillType } from "../data/SkillsData";
import SkillCard from "./SkillCard";
import { Typography } from "antd";
import { motion, Variants } from "framer-motion";
import React from "react";

const { Title } = Typography;

interface SkillsCategoryProps {
    category: SkillType;
    containerVariants: Variants;
    itemVariants: Variants;
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({
    category,
    containerVariants,
    itemVariants,
}) => {
    return (
        <motion.div
            className="flex flex-col justify-center gap-2"
            key={category.id}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <Title level={2} className="">
                    {category.category}
                </Title>
            </motion.div>
            <div className="flex flex-wrap items-center gap-3">
                {category.skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        skill={skill}
                        itemVariants={itemVariants}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsCategory;
