import { faker } from "@faker-js/faker";

export interface WorksType {
    title: string;
    description: string;
    img: string;
    url: string;
    tags: string[];
}

interface FilterType {
    name: string;
    value: string;
}
export const worksData: WorksType[] = [
    {
        title: "Portfolio",
        description: "This is my portfolio",
        img: faker.image.url(),
        url: "https://github.com",
        tags: ["react", "typescript", "tailwindcss"],
    },
];

for (let i = 0; i < 10; i++) {
    worksData.push({
        title: faker.lorem.words(2),
        description: faker.lorem.sentence(),
        img: faker.image.url(),
        url: faker.internet.url(),
        tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    });
}

export const FilterData: FilterType[] = [
    {
        name: "All",
        value: "all",
    },
    {
        name: "React",
        value: "react",
    },
];
for (let i = 0; i < 5; i++) {
    FilterData.push({
        name: faker.lorem.word(),
        value: faker.lorem.word(),
    });
}
