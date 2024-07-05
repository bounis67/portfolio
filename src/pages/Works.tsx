import { FilterData, worksData, WorksType } from "../data/WorksData";
import { Card, Segmented, Tag, Typography } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;
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
export const Works = () => {
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
            animate="visible"
        >
            <motion.div variants={item}>
                <Title>My Works</Title>
            </motion.div>
            <motion.div variants={item}>
                <div className="overflow-x-scroll md:overflow-hidden">
                    <Segmented options={options} onChange={handleFilter} />
                </div>
            </motion.div>
            <motion.div className="flex flex-wrap gap-4" variants={item}>
                <AnimatePresence>
                    {dataFilter.map((work) => (
                        <motion.div
                            key={work.id}
                            variants={AnimationCard}
                            initial="hidden"
                            whileInView="visible"
                            exit="hidden"
                            className="w-full xl:w-[45%] 2xl:w-[30%]"
                        >
                            <Card
                                cover={<img alt={work.title} src={work.img} />}
                            >
                                <div className="flex flex-col gap-2">
                                    <Title level={4}>{work.title}</Title>
                                    <Text>{work.description}</Text>
                                    <div className="flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                    <a
                                        href={work.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Text underline>{work.url}</Text>
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
