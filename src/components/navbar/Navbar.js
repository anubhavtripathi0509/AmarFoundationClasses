import React, { Component, createRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { navbar_items } from "./Data";
import AuthService from "./AuthService";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { s: false, isAuthenticated: AuthService.isAuthenticated(), darkMode: false };
    this.collapseRef = createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.addShadow);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.addShadow);
  }

  toggleDarkMode = () => {
    this.setState(prevState => {
      const newDarkMode = !prevState.darkMode;
      document.body.classList.toggle("dark-mode", newDarkMode);
      return { darkMode: newDarkMode };
    });
  };

  handleLogout = () => {
    AuthService.logout();
    this.setState({ isAuthenticated: false });
  };

  handleNavLinkClick = () => {
    const collapseElement = this.collapseRef.current;
    if (collapseElement?.classList.contains("show")) {
      new window.bootstrap.Collapse(collapseElement, { toggle: true }).hide();
    }
  };

  displayNavbarItems = () => {
    const { isAuthenticated } = this.state;
    return navbar_items.map((item, index) => (
      <li className="nav-item me-lg-3 my-lg-0 my-2" key={index}>
        <NavLink
          className="nav-link text-capitalize position-relative hover"
          to={`/${item.name || ""}`}
          onClick={this.handleNavLinkClick}
        >
          <i className={`${item.icon} me-2`}></i>
          {item.name || "home"}
        </NavLink>
      </li>
    )).concat(
      isAuthenticated ? (
        <li className="nav-item me-lg-3 my-lg-0 my-2" key="logout">
          <button
            className="nav-link btn btn-link text-capitalize position-relative hover"
            onClick={() => {
              this.handleLogout();
              this.handleNavLinkClick();
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <li className="nav-item me-lg-3 my-lg-0 my-2" key="login">
          <NavLink
            className="nav-link text-capitalize position-relative hover"
            to="/login"
            onClick={this.handleNavLinkClick}
          >
            Login
          </NavLink>
        </li>
      )
    );
  };

  addShadow = () => {
    this.setState({ s: window.scrollY >= 80 });
  };

  render() {
    const { darkMode, s } = this.state;
    return (
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top ${s ? "shadow-lg" : "shadow"}`}>
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <img src="/favicon1.ico" alt="favicon" width="50" height="50" />
            <span>A</span>mar<span>F</span>oundation<span>C</span>lasses
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" ref={this.collapseRef}>
            <ul className="navbar-nav">
              {this.displayNavbarItems()}
            </ul>
            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                checked={darkMode}
                onChange={this.toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
