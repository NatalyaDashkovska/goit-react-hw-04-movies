import axios from 'axios';
const key = `dc8ed4d6ac6c5b8332ba703755398190`;

const SearchMovieById = async movieId => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    )
    .then(res => res.data);
};

const SearchTVById = async movieId => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/tv/${movieId}?api_key=${key}&language=en-US`,
    )
    .then(res => res.data);
};

const SearchByName = async query => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(res => res.data.results);
};

const SearchTrends = async () => {
  return await axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then(res => res.data.results);
};

const SearchCast = async (movieId, type) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${key}&language=en-US`,
    )
    .then(res => res.data.cast);
};

const SearchReviews = async (movieId, type) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/${type}/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
    )
    .then(res => res.data.results);
};

export default {
  SearchMovieById,
  SearchTVById,
  SearchByName,
  SearchTrends,
  SearchCast,
  SearchReviews,
};

// res.data.results;
