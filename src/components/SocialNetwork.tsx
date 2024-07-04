import { socialNetworks } from "../data/socialNetworks";
import { Button, Divider, Tooltip } from "antd";

export const SocialNetwork = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            {socialNetworks.map((socialNetwork) => (
                <div key={socialNetwork.key} className="flex items-center">
                    <Tooltip
                        title={socialNetwork.name}
                        key={socialNetwork.name}
                    >
                        <Button
                            type="default"
                            icon={socialNetwork.icon}
                            size={"large"}
                            href={socialNetwork.url}
                            target="_blank"
                        />
                    </Tooltip>
                    {socialNetworks.length !== socialNetwork.key && (
                        <Divider type="vertical" />
                    )}
                </div>
            ))}
        </div>
    );
};
