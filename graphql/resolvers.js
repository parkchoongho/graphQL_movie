import { getMovies } from "./db";

const resolvers = {
  Query: {
    getMovies: (_, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;
