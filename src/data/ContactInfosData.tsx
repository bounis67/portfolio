import { Calendar, Mail, MapPinned } from "lucide-react";

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
        value: "boehmcorentin52@gmail.com",
    },
    {
        key: 2,
        name: "Address",
        icon: <MapPinned strokeWidth={3} size={20} />,
        value: "France, Strasbourg",
    },
    {
        key: 3,
        name: "Birthday",
        icon: <Calendar />,
        value: "12/12/2005",
    },
];
