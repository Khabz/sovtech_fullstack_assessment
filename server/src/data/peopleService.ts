import axios from 'axios';

const baseURL = 'https://swapi.dev/api/people';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getAllPeople = async (page: number) => {
  const response = await axios.get(`${baseURL}/?page=${page}`);

  const { results, next: nextPage, previous, count } = response.data;

  return {
    results,
    next: nextPage,
    previous,
    count,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPerson = async (name: string) => {
  const response = await axios.get(`${baseURL}/?search=${name}`);

  const { results } = response.data;
  const person = results[0];

  return person;
};

export default {
  getAllPeople,
  getPerson,
};
