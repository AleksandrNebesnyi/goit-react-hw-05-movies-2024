import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
