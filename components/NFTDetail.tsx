// components/NFTDetail.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { NFT } from "../types/NFT";
import NFTForm from "./NFTForm";

interface NFTDetailProps {
  nft: NFT;
}

const NFTDetail = ({ nft }: NFTDetailProps) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleBackToList = () => {
    router.push("/");
  };

  return (
    <>
      {editMode ? (
        <NFTForm nft={nft} onFormSubmit={handleEditToggle} />
      ) : (
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">{nft.name}</h2>
          {nft.imageUrl && (
            <img
              src={nft.imageUrl}
              alt={nft.name}
              className="w-full h-auto mb-6"
            />
          )}
          <p className="text-gray-600 mb-6">{nft.description}</p>
          <button
            onClick={handleEditToggle}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Edit NFT
          </button>
        </div>
      )}
      <button
        onClick={handleBackToList}
        className="mt-6 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
      >
        Back to list
      </button>
    </>
  );
};

export default NFTDetail;
