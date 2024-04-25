import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Bookify is more than just a platform for discovering new books—it's
            a vibrant community where readers can come together to celebrate
            their love for literature, share their passion, and embark on
            exciting literary adventures together.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
