import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieCast } from "services/api";
import { CastContainer} from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const location = useLocation();
  // const hrefBack = location.state?.from ?? "/home";
  console.log(location)


  let { movieId } = useParams();
  movieId = Number(movieId);
  // console.log(Number(movieId));

  const [movieCast, setMovieCast] = useState(null);
 

  useEffect(() => {
    async function getCast() {
      const cast = await getMovieCast(movieId);
      setMovieCast(cast);
      // console.log(cast);
      // console.log(popularMovies.total_results);
    }
    getCast();
  }, [movieId])
  
  if (movieCast === null) {
    return null;
  }

  return (
    <>
      <p>Cast component</p>
      <CastContainer>
        {movieCast.map(({ cast_id, character, name, profile_path }) => (
          <li key={cast_id}>
            <img src={`${BASE_IMG_URL}${profile_path}`} alt="" width={80}/>
            <p><b>Actor's name: </b>{name}</p>
            <p><b>Character: </b>{character}</p>
            <hr/>
          </li>
        ))}

      </CastContainer>
     
    </>

  )
}

export default Cast;