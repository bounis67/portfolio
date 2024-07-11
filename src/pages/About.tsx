import { WhatIDo } from "../components/WhatIDo";
import { Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";

const { Title, Paragraph } = Typography;

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

export default function About() {
    return (
        <AnimatePresence>
            <motion.div
                className="flex flex-col items-center gap-10 sm:items-start"
                variants={container}
                initial="hidden"
                whileInView={"visible"}
                exit="hidden"
            >
                <motion.div variants={item}>
                    <Title className="!mb-0 flex items-center gap-3">
                        Bonjour
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                            alt="👋"
                            width="32"
                            height="32"
                            className="align-middle"
                        />
                    </Title>
                </motion.div>
                <motion.div variants={item}>
                    <Paragraph className="text-center text-xl sm:text-start">
                        Je suis Corentin, un développeur passionné par la
                        création de toutes sortes de sites web. Depuis mon plus
                        jeune âge, j'ai toujours eu un grand intérêt pour les
                        ordinateurs et le web. J'ai commencé à créer des sites
                        web en 6ème année, et oui, c'était il y a longtemps !
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f605/512.gif"
                            alt="😅"
                            width="20"
                            height="20"
                            className="ml-1 inline"
                        />
                    </Paragraph>
                </motion.div>
                <motion.div variants={item}>
                    <Paragraph className="text-center text-xl sm:text-start">
                        L'année dernière, j'ai travaillé dur pour améliorer mes
                        compétences
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif"
                            alt="💪"
                            width="20"
                            height="20"
                            className="mx-1 inline"
                        />
                        afin de commencer à travailler en freelance. Je suis
                        actuellement en dernière année de lycée et je prévois de
                        continuer mes études avec une licence en informatique
                        l'année prochaine, et peut-être même un master.
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif"
                            alt="🤔"
                            width="20"
                            height="20"
                            className="mx-1 inline"
                        />
                        Parallèlement, je souhaite faire du freelance...
                    </Paragraph>
                </motion.div>
                <motion.div variants={item}>
                    <Title level={2} className="flex items-center">
                        Ce que je fais
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif"
                            alt="💪"
                            width="30"
                            height="30"
                            className="mx-2 align-middle"
                        />
                    </Title>
                </motion.div>
                <WhatIDo variants={container} />
            </motion.div>
        </AnimatePresence>
    );
}
