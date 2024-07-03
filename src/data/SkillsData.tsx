import { Text } from "lucide-react";

interface Skill {
    id: number;
    category: string;
    skills: {
        id: number;
        name: string;
        icon: JSX.Element;
    }[];
}

export const SkillsData: Skill[] = [
    {
        id: 1,
        category: "Frontend",
        skills: [
            {
                id: 1,
                name: "HTML",
                icon: <Text />,
            },
            {
                id: 2,
                name: "CSS",
                icon: <Text />,
            },
            {
                id: 3,
                name: "JavaScript",
                icon: <Text />,
            },
            {
                id: 4,
                name: "React",
                icon: <Text />,
            },
            {
                id: 5,
                name: "TypeScript",
                icon: <Text />,
            },
            {
                id: 6,
                name: "Tailwind CSS",
                icon: <Text />,
            },
        ],
    },
    {
        id: 2,
        category: "Backend",
        skills: [
            {
                id: 1,
                name: "Node.js",
                icon: <Text />,
            },
            {
                id: 2,
                name: "Express",
                icon: <Text />,
            },
            {
                id: 3,
                name: "MongoDB",
                icon: <Text />,
            },
            {
                id: 4,
                name: "PostgreSQL",
                icon: <Text />,
            },
            {
                id: 5,
                name: "GraphQL",
                icon: <Text />,
            },
            {
                id: 6,
                name: "Docker",
                icon: <Text />,
            },
        ],
    },
];
