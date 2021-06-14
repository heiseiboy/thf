import React from "react";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column3,
  TextWrapper,
  TopLine2,
  SubTitle,
  Img3,
  ImgWrap3,
} from "./InfoElements";

const InfoSection3 = ({
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
                  収穫したホーリーバジルは特製の棚に保存して乾燥させます
                  <br />
                  二週間ほど乾燥させていきます
                  <br />
                  色と匂いが最高のドライバジルの完成です
                </SubTitle>
              </TextWrapper>
            </Column1>
            <Column3>
              <ImgWrap3>
                <Img3 src={img} alt={alt} />
                <Img3 src={img2} alt="" />
              </ImgWrap3>
            </Column3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection3;
