import css from './Movie.module.css';
export const Movie = ({ movie }) => {
  return (
    <div className={css.Wrapper}>
      {movie.poster_path ? (
        <img
          src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
          alt={movie?.title}
        />
      ) : null}
      <div className={css.Descriptions}>
        <h3 className={css.Title}>{movie?.original_title}</h3>
        <p>
          <span className={css.Label}>User Score:</span>{' '}
          {movie?.vote_average * 10 + '%'}
        </p>
        <p>
          <span className={css.Label}>Overview:</span> {movie?.overview}
        </p>
        <p>
          <span className={css.Label}>Genres:</span>
          {movie?.genres ? movie.genres.map(genr => `${genr.name}, `) : null}
        </p>
      </div>
    </div>
  );
};
