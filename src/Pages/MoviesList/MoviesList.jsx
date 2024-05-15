import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMoviesByQuery } from 'components/api/api-servis';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const MoviesList = () => {
  let navigation = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = () => {
      setIsLoading(true);
      fetchMoviesByQuery(searchQuery, page)
        .then(data => {
          setMovies(prevState => [...prevState, ...data.results]);
        })
        .catch(error => {
          setError(error.message);
        })

        .finally(() => setIsLoading(false));
    };

    fetchMovies();
    if (page !== 1) {
      scrollOnLoadButton();
    }
  }, [page, searchQuery]);

  //  Скролл при клике на кнопку
  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const onChangeQuery = query => {
    setMovies([]);
    setPage(1);
    setSearchQuery(query);
    setError(null);
    setIsLoading(false);
    // После поиска пишет в search  шаблонную строку
    navigation({
      ...location,
      search: `query=${query}`,
    });
  };
  const handleClick = () => {
    setPage(page => page + 1);
  };
  const shouldRenderLoadMoreButton = movies.length >= 12 && !isLoading;
  return (
    <>
      <Searchbar submit={onChangeQuery} />
      {isLoading && <Loader height="150" width="150" />}
      {movies && <MoviesGallery items={movies} location={location} />}
      {shouldRenderLoadMoreButton && <Button onBtnClick={handleClick} />}
      {error && Notiflix.Notify.failure('Something is wrong try again')}
    </>
  );
};

export default MoviesList;
