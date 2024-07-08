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
        name: "À propos",
        icon: <Info size={25} />,
        link: "/",
    },
    {
        key: 2,
        name: "Compétences",
        icon: <Code size={25} />,
        link: "/skills",
    },
    {
        key: 3,
        name: "Réalisations",
        icon: <Book size={25} />,
        link: "/works",
    },
    {
        key: 4,
        name: "Contact",
        icon: <Mail size={25} />,
        link: "/contact",
    },
];
