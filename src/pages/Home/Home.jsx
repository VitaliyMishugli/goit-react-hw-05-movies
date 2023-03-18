import { NavItem, MoviesList } from './Home.styled';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/api';

const Home = () => {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    async function getPopMovies() {
      const popularMovies = await getPopularMovies();
      setPopMovies(popularMovies.results);
    }
    getPopMovies();
  }, [])
  
  if (popMovies === null) {
    return null;
   }

  return (
    <>
      <h2>Popular movies list</h2>
      <MoviesList>
          {popMovies.map(({id, title}) => {
            return (
              <li key={id}>
                <NavItem to={`/movies/${id}`}>{title}</NavItem>
              </li>
            )
          })}
        </MoviesList>
    </>
  )
}

export default Home;