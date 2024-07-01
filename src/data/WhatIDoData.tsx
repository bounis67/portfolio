import { AppWindowMac, Binary, CodeXml, DatabaseZap } from "lucide-react";

type WhatIDoType = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export const WhatIDoData: WhatIDoType[] = [
    {
        title: "Web Development",
        description:
            "I specialize in building responsive and user-friendly web applications using modern technologies like React and TypeScript.",
        icon: <CodeXml size={50} />,
    },
    {
        title: "UI/UX Design",
        description:
            "I have a keen eye for design and can create visually appealing user interfaces that enhance the overall user experience.",
        icon: <AppWindowMac size={50} />,
    },
    {
        title: "Backend Development",
        description:
            "I have experience in developing robust and scalable backend systems using frameworks like Node.js and Express.",
        icon: <Binary size={50} />,
    },
    {
        title: "Database Management",
        description:
            "I am proficient in working with databases like MySQL and MongoDB, ensuring efficient data storage and retrieval.",
        icon: <DatabaseZap size={50} />,
    },
];
