import { socialNetworks } from "../data/socialNetworks";

export const SocialNetwork = () => {
    return (
        <div className="flex flex-row justify-around gap-3">
            {socialNetworks.map((socialNetwork) => (
                <a
                    key={socialNetwork.name}
                    href={socialNetwork.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-100 p-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    <span className="hover:fill-white">
                        {socialNetwork.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};
