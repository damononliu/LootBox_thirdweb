import { PackModule } from "@3rdweb/sdk";
import { useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../components/primary-button";
import NFT from "./nft";

type Props = {
    packModule: PackModule,
    afterOpen: () => Promise<void>,
}

export default function OpenButton({packModule, afterOpen}: Props) {
    const [opening, setOpening] = useState(false);
    
    const openPackage = async () => {
        setOpening(true);

        try {
            const nftMetadata = await packModule.open('0');
            setOpening(false);
            toast.success(
                <NFT metadata={nftMetadata[0]} />,
                {
                    style: {
                        minWidth: "300px",
                    },
                    duration: 5000,
                }
            );
            await afterOpen();
        } catch (error) {
            console.error(error);
            setOpening(false);
        }

        
    }
    return (
        <PrimaryButton onClick={openPackage} disabled={opening}>
            {opening ? "Opening..." : "Open!"}
        </PrimaryButton>
    )
}