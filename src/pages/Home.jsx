import { useState } from 'react';
import ConnectWalletButton from "../Components/ConnectWalletButton";
import NFTList from '../Components/NFTList';
import { getNFTs, claimXP } from '../utils/somnia';

/**
 * Home page for the Somnia NFT Viewer.
 * Allows wallet connection, NFT display, and claiming XP.
 */
export default function Home() {
    const [wallet, setWallet] = useState(null);
    const [nfts, setNfts] = useState([]);

    const loadNFTs = async (walletData) => {
        const fetchedNFTs = await getNFTs(walletData.account);
        setNfts(fetchedNFTs);
    };

    const handleWalletConnected = async (walletData) => {
        setWallet(walletData);
        await loadNFTs(walletData);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Somnia NFT Viewer</h1>

            <ConnectWalletButton onWalletConnected={handleWalletConnected} />

            {nfts.length > 0 && (
                <>
                    <NFTList nfts={nfts} />
                    <button
                        onClick={claimXP}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
                    >
                        Claim XP
                    </button>
                </>
            )}
        </div>
    );
}
