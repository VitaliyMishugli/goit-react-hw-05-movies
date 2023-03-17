import styled from 'styled-components';
import { NavLink, Outlet, useParams, Link, useLocation } from "react-router-dom";
// import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFullInfoById } from 'services/api';
import { MovieInfoContainer, TextInfoContainer } from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

const NavItem = styled(NavLink)`
  margin: 10px 10px;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;

  &.active{
    background-color: tomato;
    color: white
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: tomato
  }
`;

const navAddDetails = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";
  // console.log(location)

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);  

  useEffect(() => {
    async function getMovieInfo() {
      const movieById = await getFullInfoById(movieId);
      setMovie(movieById);
      // console.log(movieById);
      // console.log(popularMovies.total_results);
    }
    getMovieInfo();
  }, [movieId])

  if (movie === null) {
    return null;
  }

  const { poster_path, original_title, release_date, overview, genres } = movie;
  const year = release_date.slice(0, 4);
  
  return (
    <>
      <button><Link to={backLinkHref} style={{textDecoration: 'none'}}>Go back</Link></button>
      <MovieInfoContainer>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt="" />

        <TextInfoContainer>
          <h1>{`${original_title} (${year})`}</h1>
          <p><b>Overview:</b> {overview}</p>
          <p><b>Genres:</b> {(genres.map(({ name }) => (
            <span>{` ${name} |`}</span>
          )))}</p>
        </TextInfoContainer>

      </MovieInfoContainer>
     
      <div style={{borderTop: '1px solid black', borderBottom: '1px solid black', padding:'5px'}}>
        <p>Additional information {movieId}</p>
        {navAddDetails.map(({ href, text }) => (
          
          <NavItem to={href} state={{ from: backLinkHref }} key={href}>
            {text}
          </NavItem>
        ))}      
      </div>
      <Outlet />  
    </>
    
  )
}

export default MovieDetails;