import { ethers } from 'ethers';

// Connects to user's wallet via MetaMask
export async function connectWallet() {
    if (!window.ethereum) {
        alert("Please install MetaMask to use this feature!");
        return null;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const account = await signer.getAddress();

    return { provider, signer, account };
}

// Mock function to get NFTs for an account
export async function getNFTs(account) {
    // In production: Fetch from Somnia API
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


export async function claimXP() {
   
    alert("✅ XP Claimed! (Placeholder function)");
}
