import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Wrapper } from "./styles";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper>
      <div className="navbar__links">
        <div className="navbar__links__image-container">
          <img src={logo} alt="logo" />
        </div>
        <Menu />
      </div>
      <div className="navbar-sign">
        <p>sign in</p>
        <button className="navbar-sign__signup">sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container_links">
              <Menu />
              <div className="navbar-menu-sign">
                <p>sign in</p>
                <button className="navbar-menu-sign__signup">sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Menu = () => {
  return (
    <div className="navbar__links-container">
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </div>
  );
};
export default Navbar;
