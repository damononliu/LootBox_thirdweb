import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    const bundleModuleAddress = "0x0473eF12bE2000FFC55ad1f9af7165cb4d33Ce0D";
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log("Creating NFT batch...");

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Tesla Model 3',
                description: 'A pretty fancy car!',
                image: readFileSync('./assets/tesla-model3.jpg'),
                properties: {
                rarity: 'a bit rare',
                fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
              name: 'Porsche 911',
              description: 'A pretty fancy car!',
              image: readFileSync('./assets/porsche-911.jpg'),
              properties: {
                rarity: 'a bit rare',
                fanciness: 7,
              }
            },
            supply: 50,
          },
          {
            metadata: {
              name: 'Mclaren P1',
              description: 'A super fancy car!',
              image: readFileSync('./assets/mclaren-p1.jpg'),
              properties: {
                rarity: 'super rare!',
                fanciness: 10,
              }
            },
            supply: 10,
          }
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
    
}