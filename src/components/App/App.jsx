import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { searchImages } from '../../services/unsplashApi';
import styles from './App.module.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchImages(query, page);
        
        if (data.results.length === 0 && page === 1) {
          toast.error('No images found. Try another search term!');
        }
        
        setImages((prevImages) => 
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
        toast.error('Failed to fetch images. Please try again!');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    if (searchQuery === query && page === 1) return;
    
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const showLoadMoreBtn = images.length > 0 && page < totalPages && !loading;

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      
      {error && <ErrorMessage message={error} />}
      
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      
      {loading && <Loader />}
      
      {showLoadMoreBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={modalImage}
      />
      
      <Toaster position="top-right" />
    </div>
  );
}
