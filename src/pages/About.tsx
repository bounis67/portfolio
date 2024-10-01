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
                className="flex flex-col items-center gap-7 sm:items-start"
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
                        Je m'appelle Corentin, et je suis un lycéen passionné par le développement web.
                        Mon intérêt pour la création numérique a commencé très tôt : dès la 6ème,
                        j'ai plongé dans l'univers fascinant du développement web. Cette passion
                        m'a permise d'explorer divers aspects de la conception de sites web,
                        allant des projets personnels aux petites applications.

                    </Paragraph>
                </motion.div>
                <motion.div variants={item}>
                    <Paragraph className="text-center text-xl sm:text-start">
                        J'ai comme objectif d'améliorer constamment mes compétences dans le développement web
                        pour acquérir une expérience solide et pouvoir entrer dans la vie active avec de bonnes bases.
                        En tant que jeune développeur, je suis animé par une véritable passion pour ce domaine.
                        J'aime relever de nouveaux défis, explorer des technologies innovantes et chercher des
                        solutions qui ont un impact positif. Cette passion me pousse à apprendre continuellement
                        et à m'investir pleinement dans chaque projet que j'entreprends.
                    </Paragraph>
                </motion.div>
                <motion.div variants={item}>
                    <Title level={2} className="flex items-center">
                        Ce que je maîtrise
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
