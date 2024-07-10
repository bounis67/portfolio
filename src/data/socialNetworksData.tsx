import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

type SocialNetworkType = {
    icon: JSX.Element;
    name: string;
    url: string;
    key: number;
};
export const socialNetworks: SocialNetworkType[] = [
    {
        icon: <Facebook />,
        name: "Facebook",
        url: "https://www.facebook.com/",
        key: 1,
    },
    {
        icon: <Twitter />,
        name: "Twitter",
        url: "https://twitter.com/",
        key: 2,
    },
    {
        icon: <Instagram />,
        name: "Instagram",
        url: "https://www.instagram.com/",
        key: 3,
    },
    {
        icon: <Github />,
        name: "LinkedIn",
        url: "https://github.com/bounis67",
        key: 4,
    },
];
