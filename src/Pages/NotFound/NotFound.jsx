import Notiflix from 'notiflix';

const NotFound = () => {
  return Notiflix.Notify.failure('Page not found 404');
};

export default NotFound;
