import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/api";
import { CastContainer } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  let { movieId } = useParams();
  movieId = Number(movieId);

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      const cast = await getMovieCast(movieId);
      setMovieCast(cast);
    }
    getCast();
  }, [movieId])

  if (movieCast === null) {
    return null;
  }

  return (
    <>
      <CastContainer>
        {movieCast.map(({ cast_id, character, name, profile_path }) => (
          <li key={cast_id}>
            <img src={`${BASE_IMG_URL}${profile_path}`} alt="" width={80} />
            <p><b>Actor's name: </b>{name}</p>
            <p><b>Character: </b>{character}</p>
            <hr />
          </li>
        ))}
      </CastContainer>
    </>
  )
}

export default Cast;