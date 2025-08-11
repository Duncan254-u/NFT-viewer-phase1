import { useState } from 'react';
import { connectWallet } from "../utils/somnia";

export default function ConnectWalletButton({ onWalletConnected }) {
    const [account, setAccount] = useState(null);

    const handleConnect = async () => {
        try {
            const walletData = await connectWallet(); 
            if (walletData) {
                setAccount(walletData.account);
                onWalletConnected(walletData);
            }
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    };

    return (
        <button
            onClick={handleConnect}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            {account ? `Connected: ${account}` : 'Connect Wallet'}
        </button>
    );
}
