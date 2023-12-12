import React, { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import { navLinks } from "../../constants/__data";
import Topbar from "./Topbar";
import Middle from "./Middle";

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu__active");
  };

  return (
    <header className="header" style={{ position: "relative" }}>
      {/* ============ header top ============ */}
      <Topbar />
      {/* =============== header middle =========== */}
      <Middle />
      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu" style={{ position: "relative" }}>
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
