import {
  people,
  getPersonById,
  movies,
  getMovieById,
  deleteMovieById
} from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getPersonById(id),
    movies: () => movies,
    movie: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    deleteMovie: (_, { id }) => deleteMovieById(id)
  }
};

export default resolvers;
