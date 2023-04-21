// components/NFTForm.tsx
import { useState, useEffect, FormEvent } from "react";
import { NFT } from "../types/NFT";

interface NFTFormProps {
  nft?: NFT;
  onFormSubmit: () => void;
}

const NFTForm = ({ nft, onFormSubmit }: NFTFormProps) => {
  const [name, setName] = useState(nft ? nft.name : "");
  const [description, setDescription] = useState(nft ? nft.description : "");
  const [imageUrl, setImageUrl] = useState(nft ? nft.imageUrl : "");

  useEffect(() => {
    setName(nft ? nft.name : "");
    setDescription(nft ? nft.description : "");
    setImageUrl(nft ? nft.imageUrl : "");
  }, [nft]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission and update the NFT data
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageUrl" className="block text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
      >
        Save
      </button>
    </form>
  );
};

export default NFTForm;
