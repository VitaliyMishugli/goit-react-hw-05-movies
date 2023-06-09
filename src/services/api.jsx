//  ec933baa094eb9a861a7c38baaae0d3c
import axios from 'axios';

const API_KEY = 'ec933baa094eb9a861a7c38baaae0d3c';
const BASE_URL = 'https://api.themoviedb.org/3';

// Запит за популярними фільмами
async function getPopularMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error happen' + error);
  }
}

// Запит повної інформайії про фільм
async function getFullInfoById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error happen' + error);
  }
}

// Отримання акторского складу
async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data.cast;
  } catch (error) {
    console.error('Error happen' + error);
  }
}

// Отримання оглядів
async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data.results;
  } catch (error) {
    console.error('Error happen' + error);
  }
}

// Запит по ключовому слову
async function getMovieByKeyWord(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query="${searchQuery}"&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error happen' + error);
  }
}


export { getPopularMovies, getFullInfoById, getMovieCast, getMovieReviews, getMovieByKeyWord };
