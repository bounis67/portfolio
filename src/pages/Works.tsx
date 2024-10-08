import WorkCard from "../components/WorkCard";
import { FilterData, worksData, WorksType } from "../data/WorksData";
import { Segmented, Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const { Title } = Typography;
const AnimationCard = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
export default function Works() {
    const [filter, setFilter] = useState<string>("all");
    const [dataFilter, setDataFilter] = useState<WorksType[]>(worksData);

    const handleFilter = (value: string) => {
        setFilter(value);
    };

    useEffect(() => {
        if (filter === "all") {
            setDataFilter(worksData);
        } else {
            setDataFilter(
                worksData.filter((work) => work.tags.includes(filter)),
            );
        }
    }, [filter]);

    const options = FilterData.map((filter) => ({
        label: filter.name,
        value: filter.value,
    }));

    return (
        <motion.div
            className="flex flex-col gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
            <motion.div variants={item}>
                <Title>Mes Réalisations</Title>
            </motion.div>
            <motion.div variants={item}>
                <div className="overflow-x-scroll md:overflow-hidden">
                    <Segmented options={options} onChange={handleFilter} />
                </div>
            </motion.div>
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={item}
            >
                <AnimatePresence>
                    {dataFilter.map((work) => (
                        <WorkCard
                            key={work.id}
                            work={work}
                            AnimationCard={AnimationCard}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
