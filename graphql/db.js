export const people = [
  {
    id: "1",
    name: "Park Choong Ho",
    age: 28,
    gender: "male"
  },
  {
    id: "2",
    name: "Park Ki Juung",
    age: 27,
    gender: "female"
  }
];

export const getPersonById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

export let movies = [
  { id: 0, name: "Star Wars - The new one", score: 0.1 },
  { id: 1, name: "Avengers - The new one", score: 8 },
  { id: 2, name: "The Godfather I", score: 99 },
  { id: 3, name: "Logan", score: 2 }
];

export const getMovieById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovieById = id => {
  const filteredMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > filteredMovies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};
