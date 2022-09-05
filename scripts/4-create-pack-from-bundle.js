import { sdk } from "./helpers.js";
import { readFileSync } from "fs";

async function main() {
    const bundleModuleAddress = '0x0473eF12bE2000FFC55ad1f9af7165cb4d33Ce0D';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x25895325339E42C9Ecf4D5c6a4E01d378093F1D1';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Getting all NFTs from bundle...');
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle:');
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: "Fancy Cars Pack",
            image: readFileSync('./assets/tesla-model3.jpg'),
        },
        assets: nftsInBundle.map((nft) => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}