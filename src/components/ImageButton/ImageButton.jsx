import React from 'react';
import buttonImage from '../../img/logo_cambio.png';
import styles from "./ImageButton.module.css";
import Image from 'next/image';

const ImageButton = ({ onClick }) => {
  return (
    <button className={styles.imageButton} onClick={onClick}>
      <Image width={42} height={42} src={buttonImage.src} alt="Button" />
    </button>
  );
};

export default ImageButton;