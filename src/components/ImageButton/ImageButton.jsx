import React from 'react';
import buttonImage from '../../img/logo_cambio.png';
import styles from "./ImageButton.module.css";

const ImageButton = ({ onClick }) => {
  return (
    <button className={styles.imageButton} onClick={onClick}>
      <img src={buttonImage.src} alt="Button" />
    </button>
  );
};

export default ImageButton;