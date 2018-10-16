import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./Landing.css";
import Navbar from "../common/Navbar";
class Landing extends Component {
  render() {
    return (
      <div styleName="landing">
        <Navbar />
      </div>
    );
  }
}

export default CSSModules(Landing, styles);
