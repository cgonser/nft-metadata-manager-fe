import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt_token");
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await instance.post("/auth/login", {
    username,
    password,
  });
  return response.data.accessToken;
};

export interface NFT {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export async function getNFTs(): Promise<NFT[]> {
  const response = await instance.get("/nft");
  return response.data;
}

export const getNFT = async (nftId: string): Promise<NFT> => {
  try {
    const response = await instance.get(`/nft/${nftId}`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch NFT");
    }

    const data = response.data;
    return data as NFT;
  } catch (error) {
    throw error;
  }
};
