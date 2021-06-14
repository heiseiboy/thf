import React from "react";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine2,
  SubTitle,
  Img2,
  ImgWrap2,
} from "./InfoElements";

const InfoSection2 = ({
  id,
  img,
  img2,
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
                <TopLine2>{topLine}</TopLine2>
                <SubTitle>
                  ホーリーバジルの茶葉は背面が紫色になるほど良い成長をしている証です
                  <br />
                  私たちはそういった茶葉を作るために丹精込めて育てています
                </SubTitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap2>
                <Img2 src={img} alt={alt} />
                <Img2 src={img2} alt="" />
              </ImgWrap2>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;
