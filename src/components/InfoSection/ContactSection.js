import React from "react";
import {
  TopText,
  ContactContainer,
  ContactWrapper,
  Icon,
  SubText,
} from "./ContactElements";

import { AiOutlineMail } from "react-icons/ai";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <TopText>CONTACT</TopText>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <p>thope.tulsi@gmail.com</p>
        <SubText>
          メールにお名前とお問い合わせ内容を載せて
          <br />
          送っていただきますようお願いします
        </SubText>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
