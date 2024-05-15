import { useState } from 'react';
import css from './Searchbar.module.css';
import Notiflix from 'notiflix';
import { GoSearch } from 'react-icons/go';

export const Searchbar = ({ submit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.info('Please input a query');
    }
    submit(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.flexContainer}>
          <input
            onChange={handleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search movie"
          />
          <button type="submit" className={css.SearchFormButton}>
            <GoSearch className={css.icon} size="24" color="red" />
          </button>
          <label className={css.SearchFormButtonLabel}>Search</label>
        </div>
      </form>
    </header>
  );
};
