import { Routes, Route } from 'react-router-dom';
// import { getPopularMovies } from 'services/api';
import Home from 'pages/Home/Home';

export const App = () => {
  
  
  // async function a() {
  //   const popularMovies = await getPopularMovies();
  //   // popularMovies.then(res => console.log(res.page));
  //   console.log(popularMovies.total_pages);
  //   console.log(popularMovies.total_results);
  // }

  // a();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}   />
        <Route path='/movies' element={<div>It's Movies. Page of films search by key word</div>}   />
        <Route path='/movies/:movieId' element={<div>It's MovieDetails. Page with details about the movie</div>}>
          <Route path='movies/:movieId/cast' element={<div>It's Cast. Details about the cast of the film</div>} />
          <Route path='movies/:movieId/reviews' element={<div>It's Reviews. Details about reviews</div>} />  
        </Route>
        
      </Routes>

    </>
  )
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// / movies /: movieId / cast - компонент Cast, информация о актерском составе.Рендерится на странице MovieDetails.
// / movies /: movieId / reviews - компонент Reviews, информация об обзорах.Рендерится на странице MovieDetails.
