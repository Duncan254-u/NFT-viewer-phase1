import { ethers } from 'ethers';

/**
 * Connects to the user's Ethereum wallet via MetaMask.
 * Returns the provider, signer, and connected account address.
 */
export async function connectWallet() {
    if (!window.ethereum) {
        alert("Please install MetaMask to use this feature!");
        return null;
    }

    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        return { provider, signer, account };
    } catch (error) {
        console.error("Error connecting wallet:", error);
        return null;
    }
}

/**
 * Mock NFT fetching function.
 * In a real app, replace with a blockchain or API call.
 */
export async function getNFTs(account) {
    console.log(`Fetching NFTs for account: ${account}`);
    return [
        {
            id: 1,
            name: "Somnia Genesis",
            image: "https://picsum.photos/300/300?random=1"
        },
        {
            id: 2,
            name: "XP Booster NFT",
            image: "https://picsum.photos/300/300?random=2"
        }
    ];
}

/**
 * Mock XP claim function.
 * In a real app, replace with contract call logic.
 */
export async function claimXP() {
    alert("XP Claimed successfully!");
}
