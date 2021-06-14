import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarRoute,
  SidebarWrap,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const thf = () => {
    window.open("https://t-hope.store");
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              ABOUT
            </SidebarLink>
            <SidebarLink to="products" onClick={toggle}>
              PRODUCT
            </SidebarLink>
            <SidebarLink to="method" onClick={toggle}>
              METHOD
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              CONTACT
            </SidebarLink>
          </SidebarMenu>
          <SidebarWrap>
            <SidebarRoute onClick={thf}>SHOP HERE</SidebarRoute>
          </SidebarWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
