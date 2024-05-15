import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { fetchReviews } from 'components/api/api-servis';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchReviews(id)
      .then(({ results }) => setReviews(results))
      .catch(error => setError(error));
  }, [id]);
  return (
    <>
      <ul className={css.List}>
        {reviews
          ? reviews.length > 0
            ? reviews.map(review => (
                <li className={css.Item} key={review?.id}>
                  <div className={css.Wrapper}>
                    {review.author_details.avatar_path ? (
                      <img
                        src={
                          review.author_details.avatar_path.includes('http')
                            ? review.author_details.avatar_path.slice(1)
                            : 'https://image.tmdb.org/t/p/w300' +
                              review?.author_details.avatar_path
                        }
                        alt={review?.author}
                        width="80px"
                      />
                    ) : null}

                    <p className={css.Description}>
                      <span className={css.Lebel}>NickName:</span>{' '}
                      {review?.author}
                    </p>
                  </div>
                  <p className={css.Description}>
                    <span className={css.Lebel}>Review:</span> {review?.content}
                  </p>
                </li>
              ))
            : "We don't have any reviews for this movie"
          : null}
      </ul>
      {error && Notiflix.Notify.failure('Something is wrong try again')}
    </>
  );
};

export default Reviews;
