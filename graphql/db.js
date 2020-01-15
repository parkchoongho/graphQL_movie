import axios from "axios";

const API_BASE_URL = "https://yts.lt/api/v2";

const LIST_MOVIES_URL = `${API_BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${API_BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovieDetails = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getMovieSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
