import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing")
  process.exit(1)
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Wallet private key. NEVER CHECK THE KEY IN. ALWAYS USE ENVIRONMENT VARIABLES.
    process.env.WALLET_PRIVATE_KEY,
    // We use Polygon Mumbai network
    // ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com") 
    ethers.getDefaultProvider("https://matic-mumbai.chainstacklabs.com") 
  ),
);

const appAddress = '0x0319E6fBABb7E45e5C0BCFeeB4F327CdA258490F'; // your project address from thirdweb
// const appAddress = '0x902a29f2cfe9f8580ad672aaad7e917d85ca9a2e'; // your project address from thirdweb

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}

