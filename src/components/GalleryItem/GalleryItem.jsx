import css from './GalleryItem.module.css';
import { NavLink } from 'react-router-dom';

export const GalleryItem = ({ url, description, id, location }) => {
  console.log('galleryItem-loc', location);
  return (
    <NavLink
      className={css.galleryLink}
      to={{ pathname: `/movies/${id}` }}
      state={{ from: location }}
    >
      <li className={css.galleryItem}>
        <h2 className={css.galleryItemText}>{description}</h2>
        <img className={css.imageGalleryItem} src={url} alt={description} />
      </li>
    </NavLink>
  );
};
