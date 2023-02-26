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
  contractName: 'TheNinjaKingdomOffical',
  tokenName: 'The Ninja Kingdom Offical',
  tokenSymbol: 'TNJK',
  hiddenMetadataUri: 'ipfs://Qmd3fAtcCL4cMMz4c9UVHm9gBEzU2ZhLLpgxaUtqXYpvPV/hidden.json',
  maxSupply: 2500,
  whitelistSale: {
    price: 0.055,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.065,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.065,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0xEe3aaf303ec9EdD774BE6c5092F3fAF7F87118EE",
  marketplaceIdentifier: 'ninjakingdom-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyFeesInBips: "500",
};

export default CollectionConfig;
