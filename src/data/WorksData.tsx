// import { faker } from "@faker-js/faker";

export interface WorksType {
    title: string;
    description: string;
    img: string;
    url: string;
    tags: string[];
    id: number;
}

interface FilterType {
    name: string;
    value: string;
}
export const worksData: WorksType[] = [
    {
        title: "Portfolio",
        description: "This is my portfolio",
        img: "https://picsum.photos/seed/pRPuLtiu/640/480",
        url: "https://github.com",
        tags: ["react", "typescript", "tailwindcss"],
        id: 1,
    },
    {
        title: "vulnero tantillus",
        description:
            "Abundans utroque umbra auditor cotidie solitudo alveus tantum vulgivagus.",
        img: "https://picsum.photos/seed/uXVoQWgsP/640/480",
        url: "https://wide-eyed-complement.net",
        tags: ["illum", "commemoro", "doloremque"],
        id: 2,
    },
    {
        title: "non uberrime",
        description: "Aggredior accusantium ver dapifer coniecto bellum.",
        img: "https://loremflickr.com/640/480?lock=7177780129169408",
        url: "https://bubbly-laundry.com/",
        tags: ["callide", "communis", "thorax"],
        id: 3,
    },
    {
        title: "administratio beatae",
        description: "Claudeo validus degenero derideo.",
        img: "https://picsum.photos/seed/fAB4K0N1d/640/480",
        url: "https://lovable-graft.name/",
        tags: ["aspicio", "tremo", "cernuus"],
        id: 4,
    },
    {
        title: "vulpes auctus",
        description:
            "Claustrum volubilis debilito cunctatio deleo cerno ars supellex alius.",
        img: "https://picsum.photos/seed/vbcXwH884W/640/480",
        url: "https://tiny-picture.org/",
        tags: ["stillicidium", "viridis", "custodia"],
        id: 5,
    },
    {
        title: "provident tamen",
        description:
            "Sopor texo subito nulla curto adstringo amitto neque barba.",
        img: "https://picsum.photos/seed/rgAKtA/640/480",
        url: "https://silly-serial.org",
        tags: ["coma", "adhuc", "ago"],
        id: 6,
    },
    {
        title: "tepidus cado",
        description: "Vitae rem rerum deorsum ustilo ara.",
        img: "https://picsum.photos/seed/BdLYS2CMJ/640/480",
        url: "https://optimal-tomato.info",
        tags: ["basium", "vilicus", "dedico"],
        id: 7,
    },
    {
        title: "amet volutabrum",
        description: "Cibo surgo crinis trucido vomica apostolus.",
        img: "https://picsum.photos/seed/gSCuz/640/480",
        url: "https://dependent-clan.info/",
        tags: ["demitto", "pecus", "accendo"],
        id: 8,
    },
    {
        title: "vomito beneficium",
        description:
            "Tubineus laudantium textilis ventus unus theologus cotidie accendo.",
        img: "https://picsum.photos/seed/dpEwA/640/480",
        url: "https://mild-mastoid.info/",
        tags: ["tenus", "suscipit", "theatrum"],
        id: 9,
    },
    {
        title: "dolor infit",
        description: "Solium video autem utrimque pecco.",
        img: "https://loremflickr.com/640/480?lock=4013483326701568",
        url: "https://illustrious-preserves.org",
        tags: ["odit", "soluta", "angelus"],
        id: 10,
    },
    {
        title: "umbra alter",
        description: "Subiungo beatus adopto colligo cupiditas tricesimus.",
        img: "https://picsum.photos/seed/TfnN9/640/480",
        url: "https://faint-flavor.biz/",
        tags: ["pauper", "spero", "viduo"],
        id: 11,
    },
];

// for (let i = 0; i < 10; i++) {
//     worksData.push({
//         title: faker.lorem.words(2),
//         description: faker.lorem.sentence(),
//         img: faker.image.url(),
//         url: faker.internet.url(),
//         tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
//         id: i + 2,
//     });
// }

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
        name: "Tailwind CSS",
        value: "tailwindcss",
    },
    {
        name: "Faker JS",
        value: "faker-js",
    },
    {
        name: "Lorem Ipsum",
        value: "lorem-ipsum",
    },
    {
        name: "LoremFlickr",
        value: "loremflickr",
    },
];
// for (let i = 0; i < 5; i++) {
//     FilterData.push({
//         name: faker.lorem.word(),
//         value: faker.lorem.word(),
//     });
// }
