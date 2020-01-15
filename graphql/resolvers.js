import { getMovies, getMovieDetails, getMovieSuggestions } from "./db";

const resolvers = {
  Query: {
    getMovies: (_, { limit, rating }) => getMovies(limit, rating),
    getMovieDetails: (_, { id }) => getMovieDetails(id),
    getMovieSuggestions: (_, { id }) => getMovieSuggestions(id)
  }
};

export default resolvers;
