import { contactData } from "../data/ContactData";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import { FileWarning } from "lucide-react";

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
                <p className="mb-5 text-lg !text-red-600">
                    <FileWarning color="#dc2626" className="inline" /> Ce
                    formulaire n'est actuellement pas fonctionnel. Merci de
                    m'envoyer un mail par vos propres moyens.
                    <FileWarning color="#dc2626" className="inline" />
                </p>
                <motion.div variants={item}>
                    <Title level={2}>Me contacter</Title>
                </motion.div>
                <motion.div variants={item}>
                    <Text>
                        Vous pouvez me contacter pour n'importe quoi, et je vous
                        répondrai dès que possible. Les suggestions sont
                        également les bienvenues.
                    </Text>
                </motion.div>
            </div>
            <div className="flex w-full flex-col gap-3">
                {contactData.map((data) => (
                    <motion.div key={data.name} variants={item}>
                        <label htmlFor={data.name}>{data.label} :</label>
                        {data.component}
                    </motion.div>
                ))}
                <motion.div variants={item}>
                    <Button type="primary" disabled={true}>
                        Envoyer
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
