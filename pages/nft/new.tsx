import { useState } from "react";
import { useRouter } from "next/router";

const NewNft = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    external_url: "",
    image_url: "",
    attributes: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/nft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.id) {
      router.push(`/nft/${data.id}`);
    }
  };

  return (
    <div>
      <h1>Create a new NFT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="external_url">External URL:</label>
          <input
            type="text"
            id="external_url"
            name="external_url"
            value={formData.external_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        {/* Implement attributes input here */}
        <button type="submit">Create NFT</button>
      </form>
    </div>
  );
};

export default NewNft;
