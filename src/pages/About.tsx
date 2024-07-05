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

export const About = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="flex flex-col items-center gap-5 sm:items-start"
                variants={container}
                initial="hidden"
                // animate="visible"
                whileInView={"visible"}
                exit="hidden"
            >
                <motion.div variants={item}>
                    <Title className="flex items-center gap-3">
                        Hello
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
                        I'm Corentin, a developer passionate about creating all
                        kinds of websites. Since a young age, I've always had a
                        great interest in computers and the web. I started
                        creating websites in 6th grade, and yes, that was a long
                        time ago!
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
                        For the past year, I've been working on improving my
                        skills
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif"
                            alt="💪"
                            width="20"
                            height="20"
                            className="mx-1 inline"
                        />
                        with the goal of starting freelancing. I'm currently in
                        my final year of high school and plan to continue my
                        studies with a Bachelor's degree in Computer Science
                        next year, and maybe even a Master's degree.
                        <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif"
                            alt="🤔"
                            width="20"
                            height="20"
                            className="mx-1 inline"
                        />
                        Alongside that, I want to do freelancing to finance my
                        studies.
                    </Paragraph>
                </motion.div>
                <motion.div variants={item}>
                    <Title level={2} className="flex items-center">
                        What I Do{" "}
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
};
