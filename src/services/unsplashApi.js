import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
const BASE_URL = 'https://api.unsplash.com';

const unsplashApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1, perPage = 12) => {
  const response = await unsplashApi.get('/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
      orientation: 'landscape',
    },
  });
  return response.data;
};
