// components/EditNFT.tsx

import { useState, useContext } from "react";
import { NFT } from "../../interfaces";
import { AuthContext } from "../contexts/AuthContext";
import { updateNFT } from "../lib/api";

interface EditNFTProps {
  nft: NFT;
  onEditSuccess: () => void;
}

const EditNFT = ({ nft, onEditSuccess }: EditNFTProps) => {
  const [formData, setFormData] = useState(nft);
  const { token } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token) {
      try {
        await updateNFT(formData, token);
        onEditSuccess();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="mb-2 font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="imageUrl" className="mb-2 font-semibold">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditNFT;
