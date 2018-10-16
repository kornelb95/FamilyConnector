import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.css";
import CSSModules from "react-css-modules";
import HamburgerMenu from "./HamburgerMenu";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <section styleName="navbar">
          <HamburgerMenu />
          <h1 styleName="logo">
            Family <FontAwesomeIcon icon="home" rotation={180} /> Connector
          </h1>
        </section>
        <menu styleName="navbar-menu" />
      </nav>
    );
  }
}
export default CSSModules(Navbar, styles);
