import { useState } from 'react';
import ConnectWalletButton from "../Components/ConnectWalletButton.jsx";
import { getNFTs, claimXP } from '../utils/somnia';

// NFT List Component with Tailwind-only grid styling
function NFTList({ nfts }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-5">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-56 object-cover"
          />
          <h3 className="bg-gray-100 text-center p-4 text-lg font-semibold">
            {nft.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [nfts, setNfts] = useState([]);

  // Fetch NFTs for connected account
  const loadNFTs = async (walletData) => {
    const fetchedNFTs = await getNFTs(walletData.account);
    setNfts(fetchedNFTs);
  };

  // Runs after wallet is connected
  const handleWalletConnected = async (walletData) => {
    setWallet(walletData);
    await loadNFTs(walletData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Somnia NFT Viewer</h1>

      {/* Connect Wallet Button */}
      <ConnectWalletButton onWalletConnected={handleWalletConnected} />

      {/* NFT List + Claim XP Button */}
      {nfts.length > 0 && (
        <>
          <NFTList nfts={nfts} />
          <button
            onClick={claimXP}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors"
          >
            Claim XP
          </button>
        </>
      )}
    </div>
  );
}
