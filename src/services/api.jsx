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
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error happen' + error);
  }
}

// Запит по ключовому слову
async function getMovieByKeyWord(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    // movie/${id}?api_key=${API_KEY}&language=en-US
    const data = await response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error happen' + error);
  }
}


export { getPopularMovies, getMovieByKeyWord };
