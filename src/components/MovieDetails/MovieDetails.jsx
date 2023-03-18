import { NavItem, BackBtnLink, AdditionalInfoContainer } from "./MovieDetails.styled";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getFullInfoById } from 'services/api';
import { MovieInfoContainer, TextInfoContainer } from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

const navAddDetails = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);  

  useEffect(() => {
    async function getMovieInfo() {
      const movieById = await getFullInfoById(movieId);
      setMovie(movieById);
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
      <button><BackBtnLink to={backLinkHref}>Go back</BackBtnLink></button>
      <MovieInfoContainer>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt="" />

        <TextInfoContainer>
          <h1>{`${original_title} (${year})`}</h1>
          <p><b>Overview:</b> {overview}</p>
          <p><b>Genres:</b> {(genres.map(({ name, id }) => (
            <span key={id}>{` ${name} |`}</span>
          )))}</p>
        </TextInfoContainer>
      </MovieInfoContainer>
     
      <AdditionalInfoContainer>
        <h3>Additional information about the movie</h3>
        {navAddDetails.map(({ href, text }) => (          
          <NavItem to={href} state={{ from: backLinkHref }} key={href}>
            {text}
          </NavItem>
        ))}      
      </AdditionalInfoContainer>
      <Outlet />  
    </>
  )
}

export default MovieDetails;