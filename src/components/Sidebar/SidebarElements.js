import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "0.9" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  fnt-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  height: 100%;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;

  @media screen and (max-width: 768px) {
    margin-top: 20%;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 15%;
  }
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #c4e538;
  white-space: nowrap;
  padding: 16px 64px;
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
