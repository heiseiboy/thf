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

  const thfbase = () => {
    window.open("https://thopefarm.base.shop/");
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
              About Us
            </SidebarLink>
            <SidebarLink to="basil" onClick={toggle}>
              Basil
            </SidebarLink>
            <SidebarLink to="method" onClick={toggle}>
              Method
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          <SidebarWrap>
            <SidebarRoute onClick={thf}>購入→Shopify</SidebarRoute>
          </SidebarWrap>
          <SidebarWrap>
            <SidebarRoute onClick={thfbase}>購入→BASE</SidebarRoute>
          </SidebarWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
