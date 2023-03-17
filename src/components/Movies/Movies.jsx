import { useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByKeyWord } from 'services/api';
import { NavItem } from './Movies.styled';


const Movies = () => {
  const location = useLocation();
  // console.log(location)
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

  // const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
  
  if (movies === null) {
    return null;
  }

  return (
    <>    
      <form>
        <input type="text" value={filter} onChange={(e)=>changeFilter(e.target.value)}/>
        {/* <button type='submit' name='searchFilter'>Search</button> */}
      </form>
      <div>
        <ul style={{ listStyle: 'none' }}>
          {movies.map(({ id, title }) => (
              <li key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location }} style={{margin: '10px'}}>{title}</NavItem>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Movies;