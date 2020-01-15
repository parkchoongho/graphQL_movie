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

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
