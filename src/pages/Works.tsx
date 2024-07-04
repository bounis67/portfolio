import { FilterData, worksData, WorksType } from "../data/WorksData";
import { Button, Card, Segmented, Tag, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

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
        <div className="flex flex-col gap-5">
            <Title>My Works</Title>
            <div className="flex justify-end gap-4">
                <Segmented options={options} onChange={handleFilter} />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {dataFilter.map((work, index) => (
                    <Card
                        className="w-[45%] lg:w-full"
                        key={index}
                        cover={<img alt={work.title} src={work.img} />}
                    >
                        <div className="flex flex-col gap-2">
                            <Title level={4}>{work.title}</Title>
                            <Text>{work.description}</Text>
                            <div className="flex gap-2">
                                {work.tags.map((tag, idx) => (
                                    <Tag key={idx}>{tag}</Tag>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
