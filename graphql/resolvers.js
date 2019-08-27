const choongho = {
  name: "Park Choong Ho",
  age: 28,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => choongho
  }
};

export default resolvers;
