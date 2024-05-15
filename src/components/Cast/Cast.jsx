import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchCast } from 'components/api/api-servis';
import css from './Cast.module.css';

 const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id)
      .then(({ cast }) => setCredits(cast))
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      <ul className={css.List}>
        {credits &&
          credits.length > 0 &&
          credits.map(actor => (
            <li className={css.Item} key={actor?.id}>
              {actor.profile_path ? (
                <img
                  src={'https://image.tmdb.org/t/p/w300' + actor?.profile_path}
                  alt={actor?.original_name}
                  width="100px"
                />
              ) : null}

              <div>
                <p className={css.Description}>
                  <span className={css.Label}>Character:</span>{' '}
                  {actor?.character}
                </p>
                <p className={css.Description}>
                  <span className={css.Label}>Name:</span>{' '}
                  {actor?.original_name}
                </p>
              </div>
            </li>
          ))}
      </ul>
      {error && Notiflix.Notify.failure('Something is wrong try again')}
    </>
  );
};
export default Cast;