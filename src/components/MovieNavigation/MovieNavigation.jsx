import { NavLink, useLocation, Outlet } from 'react-router-dom';
import css from './MovieNavigation.module.css';
export const MovieNavigation = () => {
  const location = useLocation();
  return (
    <div>
      <b>Additional information</b>

      <ul className={css.List}>
        <li className={css.Item}>
          <NavLink
            className={css.Link}
            to={`cast`}
            state={{ ...location.state }}
          >
            Cast
          </NavLink>
        </li>
        <li className={css.Item}>
          <NavLink
            className={css.Link}
            to={`reviews`}
            state={{ ...location.state }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
