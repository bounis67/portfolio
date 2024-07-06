interface backgroundColorType {
    color: string;
    animation: { x: number[]; y: number[] };
}
const generateLinearAnimation = () => {
    const startEndX = Math.random() * 1500;
    const startEndY = Math.random() * 1000;
    const animation: { x: number[]; y: number[] } = {
        x: [startEndX],
        y: [startEndY],
    };
    let x = startEndX;
    let y = startEndY;

    for (let i = 0; i < 2; i++) {
        const direction = Math.random() * 4 - 2;
        const distributionPx = direction * 100;
        x += distributionPx;
        y += distributionPx - 100;
        animation.x.push(x);
        animation.y.push(y);
    }
    animation.x.push(startEndX);
    animation.y.push(startEndY);

    return animation;
};

export const backgroundColorData: backgroundColorType[] = [
    {
        color: "bg-blue-500",
        animation: generateLinearAnimation(),
    },
    {
        color: "bg-yellow-500",
        animation: generateLinearAnimation(),
    },
    {
        color: "bg-red-500",
        animation: generateLinearAnimation(),
    },
    {
        color: "bg-white-500",
        animation: generateLinearAnimation(),
    },
    {
        color: "bg-purple-500",
        animation: generateLinearAnimation(),
    },
    {
        color: "bg--500",
        animation: generateLinearAnimation(),
    },
];
