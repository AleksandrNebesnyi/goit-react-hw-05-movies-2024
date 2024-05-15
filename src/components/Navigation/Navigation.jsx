import css from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <NavLink className={css.navListItem} to="/">
            Home
          </NavLink>
          <NavLink className={css.navListItem} to="movies">
            Movies
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
