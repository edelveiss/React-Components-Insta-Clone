// You do not need to change any code in this file

import React from "react";
import "./SearchBar.css";
import logo from "../../assets/logo.png";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <div className="inst-logo">
          <i className="fab fa-instagram" />
        </div>
        <img src={logo} alt="Instagram logo" style={{ width: "50%" }}></img>
        {/* <h1>Instagram</h1>*/}
      </div>
      <form className="search-form">
        <input type="text" placeholder="&#128269; Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="fas fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
