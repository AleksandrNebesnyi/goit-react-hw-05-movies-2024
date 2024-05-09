import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, url }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        onClose();
      }
    };

    console.log('Modal componentDidMount');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      console.log('Modal componentWillUnmount');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  const handleBackdropClick = event => {
    console.log('Кликнули в бекдроп');

    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);

    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img className={css.modalImage} src={url} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
