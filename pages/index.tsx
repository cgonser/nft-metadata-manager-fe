// components/NFTList.tsx

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getNFTs } from "../lib/api";
import Link from "next/link";

const NFTList = () => {
  const { token } = useContext(AuthContext);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (token) {
      getNFTs().then((data) => setNfts(data));
    }
  }, [token]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Your NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="border p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">{nft.name}</h3>
            <p className="mb-4">{nft.description}</p>
            <Link
              href={`/nft/${nft.id}`}
              passHref
              className="text-indigo-500 font-semibold hover:text-indigo-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTList;
