import React from "react";
import styles from "./Banner.module.css";
import mainBanner from "../images/banner.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={mainBanner} alt="Banner" />
      <div className={styles.textContainer}>
        <p>
          This is my website
          <br />
          developed with <span>React js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
