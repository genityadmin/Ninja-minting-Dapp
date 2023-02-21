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
  contractName: 'TheNinjaKingdomOfficial',
  tokenName: 'The Ninja',
  tokenSymbol: 'TNJK',
  hiddenMetadataUri: 'ipfs://QmVoQZAkppWrhYZ3FAnZSW14gn6DDAL73jL3gdWa9Mpx7j/hidden.json',
  maxSupply: 6000,
  whitelistSale: {
    price: 0,
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
  contractAddress: "0x148E5A0463F169eDd8A4b8ab22b4f63f1dB32Cc4",
  marketplaceIdentifier: 'ninjakingdom-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  royaltyFeesInBips: "500",
};

export default CollectionConfig;
