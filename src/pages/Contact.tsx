import { contactData } from "../data/ContactData";
import { Button, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

export const Contact: React.FC = () => (
    <div className="flex flex-col items-center justify-center gap-5">
        <div>
            <Title className="text-center">Contact Me</Title>
            <Text className="text-center">
                You can contact me about anything, and I'll get back to you as
                soon as possible. Suggestions are also welcome.
            </Text>

            <div className="flex w-full flex-col gap-3">
                {contactData.map((data) => (
                    <div key={data.name}>
                        <label htmlFor={data.name}>{data.label}:</label>
                        {data.component}
                    </div>
                ))}
                <div>
                    <Button type="primary">Send</Button>
                </div>
            </div>
        </div>
    </div>
);
