import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/api";

const Reviews = () => {
  let { movieId } = useParams();
  movieId = Number(movieId);

  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getReviews() {
      const reviews = await getMovieReviews(movieId);
      setMovieReviews(reviews);
    }
    getReviews();
  }, [movieId])

  if (movieReviews === null) {
    return null;
  }

  if (movieReviews.length === 0) {
    return <h3>No reviews</h3>
  }

  return (
    <>
      {movieReviews.map(({ id, author, content, author_details }) => (
        <div key={id}>
          <p><b>Author name: </b>{author} | <b>Rating: </b>{author_details.rating}</p>
          <p><b>Review: </b>{content}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default Reviews;
