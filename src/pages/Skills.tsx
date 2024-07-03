import { SkillsData } from "../data/SkillsData";
import { Card, Divider } from "antd";
import { Typography } from "antd";

const { Text, Title } = Typography;

export const Skills = () => {
    return (
        <div className="flex flex-col justify-center gap-10 p-4">
            <div>
                <Title className="">Skills</Title>
                <Text className="text-center text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur aliquam atque explicabo optio illo corporis quod
                    ducimus vel dolores fugiat odit aliquid sed, assumenda
                    ratione architecto possimus enim veritatis accusamus!
                </Text>
            </div>
            <div className="flex flex-col justify-around gap-5">
                {SkillsData.map((category) => (
                    <div
                        className="flex flex-col justify-center gap-2"
                        key={category.id}
                    >
                        <Title level={2} className="text-center">
                            {category.category}
                        </Title>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {category.skills.map((skills) => (
                                <Card key={skills.id} className="w-52">
                                    <div className="flex flex-col items-center">
                                        <div>{skills.icon}</div>
                                        <Divider />
                                        <Title
                                            className="text-center"
                                            level={4}
                                        >
                                            {skills.name}
                                        </Title>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
