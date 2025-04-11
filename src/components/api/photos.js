import axios from "axios";
const API_KEY = "BZQ9acIoiu7GIcuw3z-cHrluPRXf_W3Hn4UVVjiLQqU";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 10,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return data;
};
