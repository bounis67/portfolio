import { Button, Tooltip } from "antd";
import { socialNetworks } from "../data/socialNetworks";

export const SocialNetwork = () => {
    return (
        <div className="flex flex-row justify-around gap-3">
            {socialNetworks.map((socialNetwork) => (
                <Tooltip title={socialNetwork.name} key={socialNetwork.name}>
                    <Button
                        type="default"
                        icon={socialNetwork.icon}
                        size={"large"}
                        href={socialNetwork.url}
                        target="_blank"
                    />
                </Tooltip>
            ))}
        </div>
    );
};
