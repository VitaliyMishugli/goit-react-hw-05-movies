import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Layout from 'pages/Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <Home />} />
          <Route path='home' element={ <Home />} />
          <Route path='movies' element={ <Movies />}/>
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>        
        <Route path='*' element={ <Home />} />
      </Routes>
    </>
  )
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// / movies /: movieId / cast - компонент Cast, информация о актерском составе.Рендерится на странице MovieDetails.
// / movies /: movieId / reviews - компонент Reviews, информация об обзорах.Рендерится на странице MovieDetails.
