# Mint NFT

## Introduction

This is a quick tutorial on how to upload in image to IPFS and leverage its CID (Content Identifier) to mint an NFT (ERC-721) from the `contracts/MyToken.sol` contract .

## Upload

1. Upload your image via IPFS Desktop or CLI.
2. Copy the generated CID to the metadata in upload.js. You can optionally update the metadata attributes.
3. Run npm script -> npm run upload

## Deploy

1. Update the IPFS URL to include the corresponding CID of your image
2. Run npm script -> npm run deploy.

## Environment Variables

This repo uses the Sepolia network, but you can easily leverage any testnet.

1. SEPOLIA_URL="BLOCKCHAIN_PROVIDER"
   PRIVATE_KEY="WALLET_PRVIATE_KEY

## Example

https://testnets.opensea.io/collection/mytoken-10880
NFT Minted: 0x0BCb974e358e983CC482970f2DCfA0F868B04334
