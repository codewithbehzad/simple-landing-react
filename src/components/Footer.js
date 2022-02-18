import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h3 class="credit">
        Copyright © 2020 <span>Hossein Behzad </span> | all rights reserved!
      </h3>
    </div>
  );
};

export default Footer;
