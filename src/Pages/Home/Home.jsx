import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingsMovies } from '../../components/api/api-servis';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
// import css from './Home.module.css';
import Notiflix from 'notiflix';

const Home = () => {
  const location = useLocation();
  // console.log('homePage-loc', location);

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingsMovies();
        // console.log(response.results);
        setMovies(response.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {movies && <MoviesGallery items={movies} location={location} />}
      {error && Notiflix.Notify.failure('Something is wrong try again')}
    </>
  );
};
export default Home;
