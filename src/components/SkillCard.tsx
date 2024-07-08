import { Card } from "antd";
import { motion, Variants } from "framer-motion";
import React from "react";

interface SkillCardProps {
    skill: {
        id: number;
        icon: JSX.Element;
    };
    itemVariants: Variants;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, itemVariants }) => {
    return (
        <motion.div key={skill.id} variants={itemVariants}>
            <Card className="flex h-[100px] w-[100px] items-center justify-center sm:h-28 sm:w-28">
                <div>{skill.icon}</div>
            </Card>
        </motion.div>
    );
};

export default SkillCard;
