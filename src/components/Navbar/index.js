import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  // NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./NavbarElements";

import THL from "../images/thf-logo2.jpg";
import { FaBars } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const thf = () => {
    window.open("https://t-hope.store");
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          {/* <NavLogo>T-HOPE</NavLogo> */}
          <Logo src={THL} alt="logo" onClick={toggleHome} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="product">PRODUCT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="method">METHOD</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={thf}>SHOP</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
