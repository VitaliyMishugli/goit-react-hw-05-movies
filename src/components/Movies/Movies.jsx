import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByKeyWord } from 'services/api';
import { NavItem, MoviesList} from './Movies.styled';


const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    async function getMovies() {
      const moviesByKeyWord = await getMovieByKeyWord(filter);
      setMovies(moviesByKeyWord.results);
    }
    getMovies();
  }, [filter])

  const changeFilter = (value) => {
    setSearchParams(value !== '' ? { filter: value } : {});
  }

  if (movies === null) {
    return null;
  }

  return (
    <>
      <input type="text" value={filter} onChange={(e) => changeFilter(e.target.value)} />
      <div>
        <MoviesList>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location }}>{title}</NavItem>
            </li>
          ))
          }
        </MoviesList>
      </div>
    </>
  )
}

export default Movies;