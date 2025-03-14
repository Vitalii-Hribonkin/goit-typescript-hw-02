import Modal from "react-modal";

import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface Image {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.closeButton} onClick={onClose}></button>
      <img src={image.urls.regular} alt={image.alt_description} className={s.image} />
      <p className={s.description}>{image.alt_description || "No description available"}</p>
    </Modal>
  );
};

export default ImageModal;
