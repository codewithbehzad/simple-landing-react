import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>
            <select>
              <option>Services</option>
              <option>Our plans</option>
              <option>Consulting</option>
            </select>
          </li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
