import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "#fff")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  color: #f7d794;
  top: 0;
  z-index: 10;
  //opacity: ${({ scrollNav }) => (scrollNav ? "0" : "1")};

  @media screen and (max-width: 960px) {
    transition: 0.8s ease all;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  position: sticky;
  z-index: 5;
  padding: 0 24px;
  max-width: 1100px;
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
  width: 70px;
  height: 70px;
  border-radius: 50px;
  opacity: 0.9;
  margin: 5px;
`;

export const MobileIcon = styled.div`
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
    color: #000;
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
  color: #fff;
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

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  width: 70px;
  height: 40px;
  margin: 20px;
  padding: 11px;
  background: #c4e538;
  white-space: nowrap;

  color: #010606;
  font-size: 16px;
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
