import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./HamburgerMenu.css";
import CSSModules from "react-css-modules";
import { toggleMenu } from "../../actions/menuActions";
import classnames from "classnames";

class HamburgerMenu extends Component {
  toggleMenu = () => {
    this.setState({
      isOpen: this.props.isOpen
    });
    this.props.toggleMenu();
  };

  render() {
    return (
      <div
        styleName={classnames("hamburger", {
          open: this.props.isOpen
        })}
        onClick={this.toggleMenu}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

export default connect(
  mapStateToProps,
  { toggleMenu }
)(CSSModules(HamburgerMenu, styles, { allowMultiple: true }));
