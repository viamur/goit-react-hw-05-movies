import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';

const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: 'cast' */));
const Reviews = lazy(() => import('./Reviews/Reviews' /* webpackChunkName: 'reviews' */));
const Movies = lazy(() => import('../pages/Movies/Movies' /* webpackChunkName: 'Movies' */));
const Home = lazy(() => import('../pages/Home/Home' /* webpackChunkName: 'Home' */));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails' /* webpackChunkName: 'MovieDetails' */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
