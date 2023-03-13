import styled from 'styled-components';
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByKeyWord } from 'services/api';
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
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const movieById = await getMovieByKeyWord(movieId);
      setMovie(movieById);
      console.log(movieById);
      // console.log(popularMovies.total_results);
    }
    getMovie();
  }, [movieId])

  if (movie === null) {
    return null;
  }

  const { poster_path, original_title, release_date, overview, genres } = movie;

  const year = release_date.slice(0, 4);
  return (
    <>
      <button>Go back</button>
      <MovieInfoContainer>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt="" />

        <TextInfoContainer>
          <h1>{`${original_title} (${year})`}</h1>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres: {(genres.map(({ name }) => (
            <span>{` ${name} |`}</span>
          )))}</h3>
        </TextInfoContainer>

      </MovieInfoContainer>
     
      <div style={{borderTop: '1px solid black', borderBottom: '1px solid black', padding:'5px'}}>
        <p>Additional information {movieId}</p>
        {navAddDetails.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}      
      </div>
      <Outlet />  
    </>
    
  )
}

export default MovieDetails;