

import { Image } from '../../services/types';
import s from './ImageCard.module.css'
interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} className={s.image} />
    </div>
  );
};

export default ImageCard;
