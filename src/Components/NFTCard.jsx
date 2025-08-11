export default function NFTCard({ nft }) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg">
            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 text-lg font-bold">{nft.name}</h3>
        </div>
    );
}
