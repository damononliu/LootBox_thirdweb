import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x25895325339E42C9Ecf4D5c6a4E01d378093F1D1';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}