import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainContainer } from './MainContainer/MainContainer';
import { AppBar } from './AppBar/AppBar';
import { Loader } from './Loader/Loader';
// import { Home } from '../Pages/Home/Home';
// import { MoviesList } from 'Pages/MoviesList/MoviesList';
// import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { NotFound } from 'Pages/NotFound/NotFound';

const Home = lazy(() => import('Pages/Home/Home'));
const MoviesList = lazy(() => import('Pages/MoviesList/MoviesList'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <MainContainer>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MoviesList />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainContainer>
  );
};
