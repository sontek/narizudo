import { Link, Element } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

import React from "react";
import MediaQuery from "react-responsive";
import Slider from "react-slick";
import cx from "classnames";
import gus from "./css/gus.module.scss";
import styles from "./css/app.module.scss";
import logo from "./img/narizudo.png";

import { hidden } from "ansi-colors";


class Theme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx(styles.theme1, styles.theme)}>
        <h2>El Narizudo</h2>
        <div className={styles.section1} id='section1'>
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default Theme;
