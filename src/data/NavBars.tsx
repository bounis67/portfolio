import { Book, Code, Info, Mail } from "lucide-react";

type NavBarsType = {
    key: number;
    name: string;
    icon: JSX.Element;
    link: string;
};

export const NavBars: NavBarsType[] = [
    {
        key: 1,
        name: "About",
        icon: <Info size={32} />,
        link: "/about",
    },
    {
        key: 2,
        name: "Skills",
        icon: <Code size={32} />,
        link: "/projects",
    },
    {
        key: 3,
        name: "Blog",
        icon: <Book size={32} />,
        link: "/blog",
    },
    {
        key: 4,
        name: "Contact",
        icon: <Mail size={32} />,
        link: "/contact",
    },
];
