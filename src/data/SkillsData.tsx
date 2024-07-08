import { AdonisjsIcon } from "../assets/icon/AdonisjsIcon";
import { ExpressIcon } from "../assets/icon/ExpressIcon";
import { FigmaIcon } from "../assets/icon/FigmaIcon";
import { GitIcon } from "../assets/icon/GitIcon";
import { HTMLIcon } from "../assets/icon/HTMLIcon";
import { JsIcon } from "../assets/icon/JsIcon";
import { MysqlIcon } from "../assets/icon/MysqlIcon";
import { NodejsIcon } from "../assets/icon/NodejsIcon";
import { Postgresql } from "../assets/icon/Postgresql";
import { ReactIcon } from "../assets/icon/ReactIcon";
import { SassIcon } from "../assets/icon/SassIcon";
import { TailwindIcon } from "../assets/icon/TailwindIcon";
import { TypescriptIcon } from "../assets/icon/TypescriptIcon";

export interface SkillType {
    id: number;
    category: string;
    skills: {
        id: number;
        icon: JSX.Element;
    }[];
}

export const SkillsData: SkillType[] = [
    {
        id: 1,
        category: "General",
        skills: [
            {
                id: 1,
                icon: <JsIcon />,
            },
            {
                id: 2,
                icon: <TypescriptIcon />,
            },
            {
                id: 3,
                icon: <GitIcon />,
            },
            {
                id: 4,
                icon: <FigmaIcon />,
            },
        ],
    },
    {
        id: 2,
        category: "Frontend",
        skills: [
            {
                id: 1,
                icon: <HTMLIcon />,
            },
            {
                id: 2,
                icon: <SassIcon />,
            },
            {
                id: 3,
                icon: <TailwindIcon />,
            },

            {
                id: 4,
                icon: <ReactIcon />,
            },
        ],
    },
    {
        id: 3,
        category: "Backend",
        skills: [
            {
                id: 1,
                icon: <NodejsIcon />,
            },
            {
                id: 2,
                icon: <ExpressIcon />,
            },
            {
                id: 3,
                icon: <AdonisjsIcon />,
            },
        ],
    },
    {
        id: 4,
        category: "Base de données",
        skills: [
            {
                id: 1,
                icon: <MysqlIcon />,
            },
            {
                id: 2,
                icon: <Postgresql />,
            },
        ],
    },
];
