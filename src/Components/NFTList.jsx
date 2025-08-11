import React from "react";

export default function NFTList({ nfts }) {
  if (!nfts || nfts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No NFTs found for this wallet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 p-5">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-200 cursor-pointer"
        >
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-56 object-cover"
          />
          <h3 className="p-4 text-lg text-center font-semibold bg-gray-100 m-0">
            {nft.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
