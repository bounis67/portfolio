import React from "react";
import { contactInfos } from "../data/ContactInfos";
export const ContactInfo = () => {
    return (
        <div className="flex flex-col rounded-lg bg-gray-100 px-4 py-6 w-full gap-3">
            {contactInfos.map((contactInfo) => (
                <>
                    <div
                        key={contactInfo.name}
                        className="flex gap-3 items-center"
                    >
                        <div className="bg-white p-3 shadow-md rounded-lg">
                            {contactInfo.icon}
                        </div>
                        <div className="">
                            <div className="pb-1 ">
                                <p className="text-gray-600 text-sm">
                                    {contactInfo.name}
                                </p>
                            </div>
                            <div className="">
                                <p className="font-semibold">
                                    {contactInfo.value}
                                </p>
                            </div>
                        </div>
                    </div>
                    {contactInfos.length !== contactInfo.key && (
                        <div className="flex justify-center">
                            <span className="bg-gray-500 w-full h-[1px] opacity-30"></span>
                        </div>
                    )}
                </>
            ))}
        </div>
    );
};
