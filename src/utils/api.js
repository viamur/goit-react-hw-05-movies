import axios from 'axios';

class apiFetch {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '0a4aab5daca4d3b8b09b771948ad9265';
  #SEARCH = 'search/movie';
  #TRAND = 'trending/movie/day';
  #ALL = 'movie/';

  /* Запрос на ТРЕНДЫ */
  trend = async page => {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}${this.#TRAND}?api_key=${this.#API_KEY}&page=${page}`
      );
      return respons.data.results;
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Запрос ПОИСК ИНПУТ */
  search = async (query, page) => {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}${this.#SEARCH}?api_key=${this.#API_KEY}&query=${query}&page=${page}`
      );
      return respons.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Запрос id */
  id = async id => {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}${this.#ALL}/${id}?api_key=${this.#API_KEY}`
      );
      return respons.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Запрос Cast */
  cast = async id => {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}${this.#ALL}/${id}/credits?api_key=${this.#API_KEY}`
      );
      return respons.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  /* Запрос Reviews */
  reviews = async id => {
    try {
      const respons = await axios.get(
        `${this.#BASE_URL}${this.#ALL}/${id}/reviews?api_key=${this.#API_KEY}`
      );
      return respons.data;
    } catch (error) {
      console.log(error.message);
    }
  };
}

const api = new apiFetch();
export default api;
