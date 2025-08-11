import { useState } from 'react';
import { connectWallet } from "../utils/somnia";

export default function ConnectWalletButton({ onWalletConnected }) {
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    const walletData = await connectWallet();
    if (walletData) {
      setAccount(walletData.account);
      onWalletConnected(walletData);
    }
  };

  const shortenAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      {account ? `Connected: ${shortenAddress(account)}` : 'Connect Wallet'}
    </button>
  );
}
