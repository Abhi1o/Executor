import { StargateClient } from "@cosmjs/stargate";

export async function fetchBalance(address: string, rpcUrl: string, denom: string = 'uatom'): Promise<string> {
  try {
    console.log(address)
    console.log(rpcUrl)
    console.log(denom)
    // Connect to the blockchain
    const client = await StargateClient.connect(rpcUrl);

    // Fetch the balance
    const balance = await client.getAllBalances(address);

    // Find the balance for the specified denom
    const coinBalance = balance.find(coin => coin.denom === denom);

    if (coinBalance) {
      // Convert from base units (e.g., uatom) to main units (e.g., ATOM)
      const mainUnits = parseFloat(coinBalance.amount) / 1_000_000; // Assuming 6 decimal places
      return mainUnits.toFixed(6); // Return as a string with 6 decimal places
    } else {
      return "0"; // Return 0 if the specified denom is not found
    }
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
}
