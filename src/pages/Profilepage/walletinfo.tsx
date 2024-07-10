import { ethers } from 'ethers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { StargateClient } from '@cosmjs/stargate';

interface WalletInfo {
  publicKey: string;
  privateKey: string;
  balance: string;
}

async function getWalletInfoFromMnemonic(mnemonic: string): Promise<WalletInfo> {
  try {
    // Generate Ethereum-style wallet (for public and private key)
    const ethWallet = ethers.Wallet.fromPhrase(mnemonic);

    // Generate Cosmos-style wallet
    const cosmosWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: 'cosmos', // Use the appropriate address prefix for your chain
    });
    const [cosmosAccount] = await cosmosWallet.getAccounts();

    // Connect to a Cosmos chain (replace with your RPC endpoint)
    const client = await StargateClient.connect('http://localhost:8080');

    // Fetch balance (this example fetches ATOM balance)
    const balance = await client.getBalance(cosmosAccount.address, 'uatom');

    return {
      publicKey: ethWallet.address, // Ethereum-style address
      privateKey: ethWallet.privateKey,
      balance: ethers.formatUnits(balance.amount, 6), // Convert uatom to ATOM
    };
  } catch (error) {
    console.error('Error fetching wallet info:', error);
    throw error;
  }
}