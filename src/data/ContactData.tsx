import { Input } from "antd";

interface ContactData {
    label: string;
    name: string;
    rules: { required: boolean; message?: string }[];
    component: React.ReactNode;
}

export const contactData: ContactData[] = [
    {
        label: "Email",
        name: "email",
        rules: [{ required: true, message: "Please enter the email" }],
        component: <Input />,
    },
    {
        label: "Object",
        name: "object",
        rules: [{ required: true }],
        component: <Input />,
    },
    {
        label: "Message",
        name: "message",
        rules: [{ required: true }],
        component: <Input.TextArea />,
    },
];
