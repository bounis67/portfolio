import Portfolio from "../components/work_modal_content/Portfolio";
import { ReactNode } from "react";

export interface WorksType {
    title: string;
    description: string;
    img: string;
    url: string;
    tags: string[];
    id: number;
    modalContent: ReactNode;
}

interface FilterType {
    name: string;
    value: string;
}
export const worksData: WorksType[] = [
    {
        title: "Portfolio",
        description: "This is my portfolio website",
        img: "https://th.bing.com/th/id/OIP.8jN0KAPEam88i3ntYEY7DwAAAA?w=284&h=188&c=7&r=0&o=5&pid=1.7",
        url: "https://boehmcorentin.fr/",
        tags: ["react", "typescript", "tailwindcss"],
        id: 1,
        modalContent: <Portfolio />,
    },
];

export const FilterData: FilterType[] = [
    {
        name: "All",
        value: "all",
    },
    {
        name: "React",
        value: "react",
    },
    {
        name: "TypeScript",
        value: "typescript",
    },
    {
        name: "TailwindCSS",
        value: "tailwindcss",
    },
    {
        name: "Python",
        value: "python",
    },
];
