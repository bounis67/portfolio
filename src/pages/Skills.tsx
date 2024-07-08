import SkillsCategory from "../components/SkillsCategory";
import { SkillsData } from "../data/SkillsData";
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
                    Mes compétences
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
                        Au cours de mon parcours, j'ai acquis des compétences
                        dans la plupart des technologies grâce à ma grande
                        curiosité et mon envie d'apprendre. J'ai donc pu choisir
                        les technologies que j'allais approfondir pour en avoir
                        une bonne maîtrise, suivants certain critères :
                        rapidité, simplicité, modularité, performance.
                    </Text>
                </motion.div>
                <div className="flex flex-col justify-around gap-10">
                    {SkillsData.map((category) => (
                        <SkillsCategory
                            key={category.id}
                            category={category}
                            containerVariants={container}
                            itemVariants={item}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
