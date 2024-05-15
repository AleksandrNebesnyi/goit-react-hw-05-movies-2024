import css from './MoviesGallery.module.css';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';

export const MoviesGallery = ({ items, location }) => {
  return (
    <ul className={css.gallery}>
      {items.map(({ id, poster_path, original_title }) => {
        return (
          <GalleryItem
            key={id}
            id={id}
            url={`https://image.tmdb.org/t/p/w500${poster_path}`}
            largeUrl={`https://image.tmdb.org/t/p/w500${poster_path}`}
            description={original_title}
            location={location}
          />
        );
      })}
    </ul>
  );
};
