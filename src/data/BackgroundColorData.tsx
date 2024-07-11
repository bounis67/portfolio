const windowWidth = window.innerWidth - 500;
const windowHeight = window.innerHeight - 700;

interface backgroundColorType {
    color: string;
    animation: { x: number[]; y: number[] };
}

function generateRandomAnimation(windowWidth: number, windowHeight: number) {
    return {
        x: Array.from({ length: 5 }, () => Math.random() * windowWidth),
        y: Array.from({ length: 5 }, () => Math.random() * windowHeight),
    };
}

export const backgroundColorData: backgroundColorType[] = [
    {
        color: "bg-blue-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
    {
        color: "bg-yellow-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
    {
        color: "bg-red-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
    {
        color: "bg-white-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
    {
        color: "bg-purple-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
    {
        color: "bg-black-500",
        animation: generateRandomAnimation(windowWidth, windowHeight),
    },
];
