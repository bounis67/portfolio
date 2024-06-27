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
                    className="bg-stone-100 p-2 rounded-md hover:bg-white hover:ring-4 transition-all duration-300 "
                >
                    <span className="hover:fill-white">
                        {socialNetwork.icon}
                    </span>
                </a>
            ))}
        </div>
    );
};
