import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { Movie } from 'components/Movie/Movie';
import { MovieNavigation } from 'components/MovieNavigation/MovieNavigation';
import { fetchMovieById } from 'components/api/api-servis';
import Notiflix from 'notiflix';
// import css from './MovieDetails.module.css';
 const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');
  console.log('MovieDetails-loc-state', location.state);
  // Запрос при маунте
  useEffect(() => {
    fetchMovieById(id)
      .then(data => {
        // console.log(data);
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);
  // Функция для кнопки "Назад"
  function handleGoBack() {
    // navigate(-1);
    // navigate(location?.state?.from ?? '/');
    navigate(backLinkLocationRef.current);
  }
  return (
    <>
      <ButtonGoBack goBack={handleGoBack} />
      {movie && <Movie movie={movie} />}
      {movie && <MovieNavigation />}
      {error && Notiflix.Notify.failure('Something is wrong try again')}
    </>
  );
};
export default MovieDetails;