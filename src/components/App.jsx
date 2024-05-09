import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImage } from '../components/api/api-servis';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = () => {
      setIsLoading(true);
      getImage(searchQuery, page)
        .then(data => {
          setImages(prevState => [...prevState, ...data]);
        })
        .catch(error => {
          setError(error.message);
          Notiflix.Notify.failure('Something is wrong try again');
        })

        .finally(() => setIsLoading(false));
    };

    fetchImages();
    if (page !== 1) {
      scrollOnLoadButton();
    }
  }, [page, searchQuery]);

  const onChangeQuery = query => {
    setImages([]);
    setPage(1);
    setSearchQuery(query);
    setError(null);
    setIsLoading(false);
  };

  const handleClick = () => {
    setPage(page => page + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setLargeImage('');
  };
  const handleImageClick = largeImgUrl => {
    setShowModal(true);
    setLargeImage(largeImgUrl);
  };
  //  Скролл при клике на кнопку
  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  const shouldRenderLoadMoreButton = images.length >= 12 && !isLoading;
  return (
    <div className={css.container}>
      <Searchbar submit={onChangeQuery} />
      {isLoading && <Loader height="150" width="150" />}
      {images && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {shouldRenderLoadMoreButton && <Button onBtnClick={handleClick} />}
      {showModal && <Modal onClose={toggleModal} url={largeImage}></Modal>}
    </div>
  );
};
