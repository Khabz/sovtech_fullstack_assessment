import axios from 'axios';

const baseURL = 'https://swapi.dev/api/people';

const getAllPeople = async (page: number, next: string, prev: string) => {
  const response = await axios.get(`${baseURL}/?page=${page}`);

  const { results, next: nextPage, previous, count } = response.data;

  return {
    results,
    next: nextPage,
    previous,
    count,
  };
};

export default {
  getAllPeople,
};
