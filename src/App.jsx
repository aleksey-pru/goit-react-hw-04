import { useEffect, useState } from "react";
import axios from "axios";
import { getPhotos } from "./components/api/photos";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setmodalAlt] = useState("");

  useEffect(() => {
    if (isEmpty) {
      toast.error("Sorry, we didn't find any pictures");
    }
  }, [isEmpty]);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, total, total_pages, per_page } = await getPhotos(
          query,
          page
        );
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (src, alt) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setmodalAlt(alt);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setmodalAlt("");
  };
  return (
    <div className="container">
      {!error && !isEmpty && <h2>Search images!</h2>}
      <SearchBar onSubmit={onHandleSubmit} />

      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isVisible && (
        <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;
