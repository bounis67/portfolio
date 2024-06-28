import { contactInfos } from "../data/ContactInfos";
import { Button, Card, Divider, Tooltip, Typography, message } from "antd";
const { Text, Paragraph } = Typography;

export const ContactInfo = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const HandleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        messageApi.success("Copied to clipboard");
    };

    return (
        <>
            {contextHolder}
            <Card className="w-full max-w-[400px]">
                <div className="flex flex-col gap-3">
                    {contactInfos.map((contactInfo) => (
                        <>
                            <div className="flex flex-row gap-3 items-center">
                                <Tooltip title={"Copy"}>
                                    <Button
                                        icon={contactInfo.icon}
                                        size={"large"}
                                        onClick={() =>
                                            HandleCopy(contactInfo.value)
                                        }
                                    />
                                </Tooltip>
                                <div className="flex flex-col w-full">
                                    <Text type="secondary">
                                        {contactInfo.name}
                                    </Text>
                                    <Paragraph
                                        ellipsis={{
                                            rows: 1,
                                            suffix: "",
                                        }}
                                    >
                                        {contactInfo.value}
                                    </Paragraph>
                                </div>
                            </div>
                            {contactInfos.length !== contactInfo.key && (
                                <Divider className="my-[2px]" />
                            )}
                        </>
                    ))}
                </div>
            </Card>
        </>
    );
};
