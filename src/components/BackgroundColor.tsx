import { backgroundColorData } from "./../data/BackgroundColorData";
import { motion } from "framer-motion";

export const BackgroundColor = () => {
    return (
        <div className="z-0 blur-[200px]">
            {backgroundColorData.map((bgColor, index) => (
                <motion.span
                    key={index}
                    className={`fixed h-[700px] w-[500px] marker:rounded-full ${bgColor.color}`}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                        x: bgColor.animation.x,
                        y: bgColor.animation.y,
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.span>
            ))}
        </div>
    );
};
