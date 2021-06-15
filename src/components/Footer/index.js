import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const Instagram = () => {
    window.open("https://www.instagram.com/daisuke_kumehara/");
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <SocialIcons>
              <SocialIconLink onClick={Instagram} aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink onClick aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink onClick aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink> */}
            </SocialIcons>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights onClick={toggleHome}>
              Mamo ©︎ {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
