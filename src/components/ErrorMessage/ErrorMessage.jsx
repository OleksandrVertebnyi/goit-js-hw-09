import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <p className={styles.text}>
        {message || 'Oops! Something went wrong. Please try again later.'}
      </p>
    </div>
  );
}
