import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.imagesList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
          <div className={s.infoContainer}>
            <p>Likes: {image.likes}</p>
            <p>Data: {image.created_at.slice(0, 10)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
