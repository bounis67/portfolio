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
                            <div className="flex flex-row items-center gap-3">
                                <Tooltip title={"Copy"}>
                                    <Button
                                        size={"large"}
                                        onClick={() =>
                                            HandleCopy(contactInfo.value)
                                        }
                                        className="!px-2 !py-1"
                                    >
                                        {contactInfo.icon}
                                    </Button>
                                </Tooltip>
                                <div className="flex w-full flex-col">
                                    <Text type="secondary">
                                        {contactInfo.name}
                                    </Text>
                                    <Paragraph
                                        ellipsis={{
                                            rows: 1,
                                            suffix: "",
                                        }}
                                        className="!m-0"
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
