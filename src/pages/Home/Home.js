// import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/api';


const Home = () => {
  const [popMovies, setPopMovies] = useState(null);


  // async function a() {
  //   const popularMovies = await getPopularMovies();
  //   setPopMovies(popularMovies.results);
  //   console.log(popularMovies);
  //   console.log(popularMovies.total_results);
  // }

  useEffect(() => {
    async function a() {
      const popularMovies = await getPopularMovies();
      setPopMovies(popularMovies.results);
      console.log(popularMovies);
      console.log(popularMovies.total_results);
    }
    a();
  }, [])
  
  if (popMovies === null) {
    return null;
   }

  return (
    <>
      <h1>HOME PAGE</h1>
       <ul>
          {popMovies.map(movie => {
            return (
              <li key={movie.id}>{ movie.title}</li>
            )
          })}
        </ul>
    </>
  )
}

export default Home;