import { WhatIDoData } from "./../data/WhatIDoData";
import InfoCard from "./InfoCard";
import { motion, Variants } from "framer-motion";

interface WhatIDoProps {
    variants: Variants;
}

export const WhatIDo = ({ variants }: WhatIDoProps) => {
    return (
        <motion.div className="flex flex-col gap-4" variants={variants}>
            {WhatIDoData.map((data, index) => (
                <InfoCard
                    variants={variants}
                    key={index}
                    description={data.description}
                    icon={data.icon}
                    title={data.title}
                />
            ))}
        </motion.div>
    );
};
