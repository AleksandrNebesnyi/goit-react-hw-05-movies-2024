import css from './ButtonGoBack.module.css';
export const ButtonGoBack = ({ goBack }) => {
  return (
    <button className={css.button} type="button" onClick={goBack}>
      Go back
    </button>
  );
};
