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
  Text,
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

  const thfbase = () => {
    window.open("https://thopefarm.base.shop/");
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          {/* <NavLogo>T-HOPE</NavLogo> */}
          <Logo src={THL} alt="logo" onClick={toggleHome} />
          <Text>T-HOPE ファーム</Text>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="basil">Basil</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="method">Method</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={thf}>購入→Shopify</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink onClick={thfbase}>購入→BASE</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
