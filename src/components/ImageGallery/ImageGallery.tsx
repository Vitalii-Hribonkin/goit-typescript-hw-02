import { Image } from "../../services/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  if (!images || images.length === 0) return <p>Start searching</p>;

  return (
    <section className={s.section}>
      <ul className={s.ul}>
        {images.map((image) => (
          <li key={image.id} className={s.li}>
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageGallery;
