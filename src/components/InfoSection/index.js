import React from "react";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  SubTitle,
  Img,
  ImgWrap,
  BtnWrap,
  ButtonD,
  Leaf,
} from "./InfoElements";

import { FaLeaf } from "react-icons/fa";

const InfoSection = ({
  id,
  img,
  imgStart,
  topLine,
  // description,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Leaf>
                  <FaLeaf />
                </Leaf>
                <SubTitle>
                  埼玉のとある青年たちが
                  <br />
                  第6次産業をはじめました
                  <br />
                  ホーリーバジル 大切に育てています　
                  <br />
                  通称　Tulsi(トゥルシー)
                  <br />
                </SubTitle>
                <BtnWrap>
                  <ButtonD>↓</ButtonD>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
