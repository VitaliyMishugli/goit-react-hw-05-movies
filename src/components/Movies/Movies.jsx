import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'services/api';
import SearchBox from '../SearchBox/SearchBox';
// import { NavLink } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    async function getMovies() {
      const moviesByKeyWord = await getMovieByKeyWord('king');
      setMovies(moviesByKeyWord.results);
      console.log(movies);
    }
    getMovies();
  }, [filter])

  const changeFilter = (value) => {
    setSearchParams(value !== '' ? { filter: value }: {});
  }

  const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
  
  if (movies.length === 0) {
    return null;
  }

  return (
    <>      
      <SearchBox onChange={changeFilter} />
      <div>
        <ul style={{ listStyle: 'none' }}>
          {movies.length > 0 && (
            visibleMovies.map(({ id, title }) => (
              <li key={id}>
                {title}
              </li>
            ))
          )}
          {/* {movies.length > 0 && (
            movies.map(({ id, title }) => (
              <li key={id}>
                {title}
              </li>
            ))
          ) } */}
        </ul>
      </div>
    </>
    

  )
}

export default Movies;