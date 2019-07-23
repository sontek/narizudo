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
    this.state = {
      rotate: false
    };
  }

  render() {
    return (
      <div className={cx(styles.theme1, styles.theme)}>
        <h2>
          El Narizudo
        </h2>
        <div className={styles.section1} id='section1'>
          <div className={styles.center}>
            <button onClick={() => {
                this.setState({
                  rotate: !this.state.rotate
                });
            }}>
              {this.state.rotate ? "Stop Rotating" : "Rotate"}
            </button>
          </div>
          <img src={logo}
            className={this.state.rotate ? styles.rotate : undefined}
          />
        </div>
      </div>
    );
  }
}

export default Theme;
