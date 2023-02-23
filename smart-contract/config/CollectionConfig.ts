import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'IrVins',
  tokenName: 'Salted Egg Fish Skin',
  tokenSymbol: 'TNJK',
  hiddenMetadataUri: 'ipfs://QmTAMUsVyqGGPYtboVoQrP54fvkW9zqDDjFqRxBhCz26Q7/hidden.json',
  maxSupply: 6000,
  whitelistSale: {
    price: 0.0001,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.065,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.00011,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0xBe1E2250b7455Cd0A02066CA332850E8ffa730fb",
  marketplaceIdentifier: 'ninjakingdom-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyFeesInBips: "500",
};

export default CollectionConfig;
