import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fffafa" : "transparent")};
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s ease all;

  @media screen and (max-width: 960px) {
    transition: 0.8s ease all;
    height: 70px;
    background: ${({ scrollNav }) => (scrollNav ? "#fffafa" : "transparent")};
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  z-index: 5;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 150;
  text-decoration: none;

  @media screen and(max-width: 768px) {
    font-size: 12px;
  }
`;

export const Logo = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  opacity: 0.9;
  margin: 5px;
`;

export const MobileIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    margin: 10px;
    cursor: pointer;
    color: #e6e6fa;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #718093;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: left;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  width: 100px;
  height: 35px;
  padding: 10px 14px;
  background: #c4e538;
  font-weight: 50;
  color: #010606;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const Text = styled.p`
  display: none;
  @media screen and (max-width: 768px) {
    font-family: "IM Fell English", serif;
    display: flex;
    position: absolute;
    top: 28px;
    left: 35%;
  }
`;
