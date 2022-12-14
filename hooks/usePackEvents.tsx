import { ethers } from "ethers";
import type { ContractInterface } from "ethers";
import { useEffect } from "react";
import packABI from "../utils/PackABI.json";
import { packAddress } from "../lib/contractAddresses";
import { useWeb3 } from "@3rdweb/hooks";
import {toast} from "react-hot-toast";
import Link from "next/link";



export default function usePackEvents() {
    const { address, provider } = useWeb3();
    useEffect(() => {
        if(provider) {
            const abi = packABI as ContractInterface;
            const packContract = new ethers.Contract(packAddress, abi, provider);
            packContract.on("TransferSingle", (_operator, _from, _to, _id, _value) => {
                if(_to === address) {
                    console.log("We received a pack!")
                    toast.success(
                        <div className="flex flex-col gap-2">
                            <p className="text-green-800">
                                {" "}
                                Congratulations! You were awarded a fancy cars pack!
                            </p>
                            <p>
                                View and open it in the{" "}
                                <Link href="/lounge">
                                <a className="underline hover:no-underline">lounge</a>
                                </Link>
                                !
                            </p>
                        </div>,
                        {
                            duration: 5000,
                        }

                    );
                }
            });
        }
    }, [!!provider]);
}
