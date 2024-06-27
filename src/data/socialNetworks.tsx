import {
    Facebook,
    Instagram,
    Linkedin,
    LucideFacebook,
    Twitter,
} from "lucide-react";

type SocialNetworkType = {
    icon: JSX.Element;
    name: string;
    url: string;
};
export const socialNetworks: SocialNetworkType[] = [
    {
        icon: <LucideFacebook />,
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
