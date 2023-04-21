import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import NFTDetail from "../../components/NFTDetail";
import { AuthContext } from "../../contexts/AuthContext";
import { getNFT } from "../../lib/api";

const NFTDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [nft, setNft] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token && id) {
      getNFT(id).then((data) => setNft(data));
    }
  }, [id, token]);

  return <NFTDetail nft={nft} />;
};

export default NFTDetailPage;
