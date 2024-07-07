import { contactData } from "../data/ContactData";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

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
export default function Contact() {
    return (
        <motion.div
            className="flex flex-col gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
            <div>
                <motion.div variants={item}>
                    <Title>Contact Me</Title>
                </motion.div>
                <motion.div variants={item}>
                    <Text>
                        You can contact me about anything, and I'll get back to
                        you as soon as possible. Suggestions are also welcome.
                    </Text>
                </motion.div>
            </div>
            <div className="flex w-full flex-col gap-3">
                {contactData.map((data) => (
                    <motion.div key={data.name} variants={item}>
                        <label htmlFor={data.name}>{data.label}:</label>
                        {data.component}
                    </motion.div>
                ))}
                <motion.div variants={item}>
                    <Button type="primary">Send</Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
