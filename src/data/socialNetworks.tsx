import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

type SocialNetworkType = {
    icon: JSX.Element;
    name: string;
    url: string;
};
export const socialNetworks: SocialNetworkType[] = [
    {
        icon: <Facebook />,
        name: "Facebook",
        url: "https://www.facebook.com/",
    },
    {
        icon: <Twitter />,
        name: "Twitter",
        url: "https://twitter.com/",
    },
    {
        icon: <Instagram />,
        name: "Instagram",
        url: "https://www.instagram.com/",
    },
    {
        icon: <Linkedin />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
    },
];
