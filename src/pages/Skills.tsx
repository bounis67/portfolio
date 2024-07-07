import { SkillsData } from "../data/SkillsData";
import { Card, Divider } from "antd";
import { Typography } from "antd";
import { motion } from "framer-motion";

const { Text, Title } = Typography;

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
export default function Skills() {
    return (
        <motion.div
            className="flex flex-col justify-center gap-5 p-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
            <motion.div variants={item}>
                <Title className="flex items-center gap-3">
                    Skills
                    <picture>
                        <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.webp"
                            type="image/webp"
                        />
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif"
                            alt="💪"
                            width="32"
                            height="32"
                        />
                    </picture>
                </Title>
            </motion.div>
            <div className="flex flex-col gap-10">
                <motion.div variants={item}>
                    <Text className="text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur aliquam atque explicabo optio illo corporis
                        quod ducimus vel dolores fugiat odit aliquid sed,
                        assumenda ratione architecto possimus enim veritatis
                        accusamus!
                    </Text>
                </motion.div>
                <div className="flex flex-col justify-around gap-5">
                    {SkillsData.map((category) => (
                        <motion.div
                            className="flex flex-col justify-center gap-2"
                            key={category.id}
                            variants={container}
                        >
                            <motion.div variants={item}>
                                <Title level={2} className="">
                                    {category.category}
                                </Title>
                            </motion.div>
                            <div className="flex flex-wrap items-center gap-3">
                                {category.skills.map((skills) => (
                                    <motion.div key={skills.id} variants={item}>
                                        <Card>
                                            <div className="flex flex-col items-center">
                                                {skills.icon}
                                                <Divider />
                                                <Text className="text-center text-lg">
                                                    {skills.name}
                                                </Text>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
