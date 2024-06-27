import React from "react";
import avatar from "../assets/avatar.jpg";
import { SocialNetwork } from "./SocialNetwork";
import { ContactIcon } from "lucide-react";
import { ContactInfo } from "./ContactInfo";
export const SideBar = () => {
    return (
        <div className="w-96 bg-white px-4 py-10 rounded-xl flex flex-col gap-3 items-center">
            <div className="w-40 h-40 overflow-hidden rounded-xl">
                <img
                    src={avatar}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mt-4 font-mono">John Doe</h1>
            </div>
            <div className="bg-gray-100 px-4 py-2 font-mono font-bold rounded-lg">
                Web Developper
            </div>
            <SocialNetwork />
            <ContactInfo />
            <div className="mt-4">
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg ">
                    Download CV
                </button>
            </div>
        </div>
    );
};
