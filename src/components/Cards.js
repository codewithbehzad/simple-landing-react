import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

import ip11 from "../images/iphone11.jpg";
import ip12 from "../images/iphone12.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={ip11} name="Iphone 11" price="price: 500 $" />
        <Card image={ip12} name="Iphone 12" price="price: 700 $" />
        <Card image={ip11} name="Iphone 11" price="price: 500 $" />
        <Card image={ip12} name="Iphone 12" price="price: 700 $" />
      </div>
    );
  }
}

export default Cards;
