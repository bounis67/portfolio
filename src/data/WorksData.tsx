import CourseManager from "../components/work_modal_content/CourseManager";
import Portfolio from "../components/work_modal_content/Portfolio";
import TextRectify from "../components/work_modal_content/TextRectify";
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
        description: "Mon portfolio",
        img: "https://th.bing.com/th/id/OIP.8jN0KAPEam88i3ntYEY7DwAAAA?w=284&h=188&c=7&r=0&o=5&pid=1.7",
        url: "https://boehmcorentin.fr/",
        tags: ["react", "typescript", "tailwindcss"],
        id: 1,
        modalContent: <Portfolio />,
    },
    {
        title: "Course Manager",
        description: "Organisation optimale des cours et des notes",
        img: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://github.com/bounis67/course-manager",
        tags: ["python"],
        id: 2,
        modalContent: <CourseManager />,
    },
    {
        title: "TextRectify",
        description: "Outil de correction de texte sur windows propulsé par ia",
        img: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://boehmcorentin.fr/",
        tags: ["python"],
        id: 3,
        modalContent: <TextRectify />,
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
