import { AppWindowMac, Binary, CodeXml, DatabaseZap } from "lucide-react";

type WhatIDoType = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export const WhatIDoData: WhatIDoType[] = [
    {
        title: "Développement Web",
        description:
            "Je me spécialise dans la création d'applications web réactives et conviviales en utilisant des technologies modernes comme React et TypeScript.",
        icon: <CodeXml size={50} />,
    },
    {
        title: "Design UI/UX",
        description:
            "J'ai un œil aiguisé pour le design et je peux créer des interfaces utilisateur visuellement attrayantes qui améliorent l'expérience utilisateur globale.",
        icon: <AppWindowMac size={50} />,
    },
    {
        title: "Développement Backend",
        description:
            "J'ai de l'expérience dans le développement de systèmes backend robustes et évolutifs en utilisant des frameworks comme Node.js et Express. Je suis également familier avec AdonisJs.",
        icon: <Binary size={50} />,
    },
    {
        title: "Gestion de Base de Données",
        description:
            "Je suis compétent dans le travail avec des bases de données comme PostgreSQL, assurant un stockage et une récupération des données efficaces.",
        icon: <DatabaseZap size={50} />,
    },
];
