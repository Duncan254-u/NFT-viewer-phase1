export default function NFTList({ nfts }) {
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
