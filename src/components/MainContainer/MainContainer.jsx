import css from './MainContainer.module.css';

export const MainContainer = ({ children }) => {
  return <div className={css.mainContainer}>{children}</div>;
};
