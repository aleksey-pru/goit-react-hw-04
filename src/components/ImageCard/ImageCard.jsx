import s from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  const { urls, description } = image;
  return (
    <div>
      <img
        className={s.img}
        height={270}
        width={400}
        src={urls.small}
        alt={description || "Image"}
        onClick={() => openModal(urls.regular, description)}
      />
    </div>
  );
};

export default ImageCard;
