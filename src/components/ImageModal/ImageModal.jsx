import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={styles.content}>
        <img
          className={styles.image}
          src={image.urls.regular}
          alt={image.alt_description || 'Image'}
        />
        {image.description && (
          <p className={styles.description}>{image.description}</p>
        )}
        <div className={styles.info}>
          {image.user && (
            <p className={styles.author}>
              Photo by <strong>{image.user.name}</strong>
            </p>
          )}
          {image.likes !== undefined && (
            <p className={styles.likes}>❤️ {image.likes} likes</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
