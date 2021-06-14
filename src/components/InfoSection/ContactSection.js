import React from "react";
import {
  Text,
  ContactContainer,
  ContactWrapper,
  Icon,
  SubText,
} from "./ContactElements";

import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <Text>CONTACT</Text>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <p>holybasil.k@gmail.com</p>
        {/* <Icon>
          <AiFillPhone />
          <p>000-1234-5678</p>
        </Icon> */}
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
