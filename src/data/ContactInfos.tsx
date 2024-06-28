import { Calendar, Mail, MapPinned, Smartphone } from "lucide-react";

type ContactInfoType = {
    key: number;
    name: string;
    icon: JSX.Element;
    value: string;
};
export const contactInfos: ContactInfoType[] = [
    {
        key: 1,
        name: "Email",
        icon: <Mail strokeWidth={3} size={20} />,
        value: "msdfjlfsj@fsdfsdf.fr",
    },
    {
        key: 2,
        name: "Phone",
        icon: <Smartphone strokeWidth={3} size={20} />,
        value: "0606060606",
    },
    {
        key: 3,
        name: "Address",
        icon: <MapPinned strokeWidth={3} size={20} />,
        value: "1 rue de la paix",
    },
    {
        key: 4,
        name: "Birthday",
        icon: <Calendar />,
        value: "12/12/2005",
    },
];
