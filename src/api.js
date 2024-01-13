import axios from "axios";

const searchImages = async (keyword) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pFGnL3SPLFvJcpfACxqv8VFEJZ9DBSiZOYgysojarsQ",
    },
    params: {
      query: keyword,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
export default searchImages;
