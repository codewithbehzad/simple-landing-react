import React from "react";
import styles from "./Brands.module.css";

import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import asus from "../images/asus.png";
import msi from "../images/msi.png";
import hp from "../images/hp.png";

const Brands = () => {
  return (
    <div className={styles.container}>
      <h3>Choose your favorite brand !</h3>
      <img src={apple} alt="brand" />
      <img src={samsung} alt="brand" />
      <img src={msi} alt="brand" />
      <img src={asus} alt="brand" />
      <img src={hp} alt="brand" />
    </div>
  );
};

export default Brands;
