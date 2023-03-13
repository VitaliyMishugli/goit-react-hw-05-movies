import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularMovies } from 'services/api';

const NavItem = styled(NavLink)`
  margin: 10px 10px;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  position: relative;

  &.active{
    background-color: tomato;
    color: white
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: tomato
  }
`;

const Home = () => {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    async function getPopMovies() {
      const popularMovies = await getPopularMovies();
      setPopMovies(popularMovies.results);
      console.log(popularMovies);
      // console.log(popularMovies.total_results);
    }
    getPopMovies();
  }, [])
  
  if (popMovies === null) {
    return null;
   }

  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>Popular movies list</h2>
      <ul style={{ listStyle: 'none'}}>
          {popMovies.map(({id, title}) => {
            return (
              <li key={id}>
                <NavItem to={`/movies/${id}`} style={{margin: '10px'}}>{title}</NavItem>
              </li>
            )
          })}
        </ul>
    </>
  )
}

export default Home;