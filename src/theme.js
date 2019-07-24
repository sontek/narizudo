import { Link, Element } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

import React from "react";
import MediaQuery from "react-responsive";
import Slider from "react-slick";
import cx from "classnames";
import gus from "./css/gus.module.scss";
import styles from "./css/app.module.scss";
import josep from "./img/josep.png";
import joe from "./img/joe.png";
import { hidden } from "ansi-colors";

const narizudos = [
  josep,
  joe,
]

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false,
      selectedNarizudo: 0
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
            <button onClick={() => {
                if (this.state.selectedNarizudo === narizudos.length - 1) {
                  this.setState({
                    selectedNarizudo: 0
                  });
                }
                else {
                  const nextIndex = this.state.selectedNarizudo += 1;
                  this.setState({
                    selectedNarizudo: nextIndex
                  });
                }
            }}>
              Next Narizudo
            </button>
          </div>
          <img src={narizudos[this.state.selectedNarizudo]}
            className={this.state.rotate ? styles.rotate : undefined}
          />
        </div>
      </div>
    );
  }
}

export default Theme;
