import React from "react";
import {
  InfoContainer3,
  InfoRow,
  InfoWrapper,
  ColumnCenter,
  Column3,
  TextWrapper,
  TopLine3,
  SubTitleCenter,
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
      <InfoContainer3 id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnCenter>
              <TextWrapper>
                <TopLine3>{topLine}</TopLine3>
                <SubTitleCenter>
                  収穫したホーリーバジルは特製の棚に保存して乾燥させます
                  <br />
                  二週間ほど乾燥させていきます
                  <br />
                  色と匂いが最高のドライバジルの完成はすぐそこです
                </SubTitleCenter>
              </TextWrapper>
            </ColumnCenter>
            <Column3>
              <ImgWrap3>
                <Img3 src={img} alt={alt} />
                <Img3 src={img2} alt="" />
              </ImgWrap3>
            </Column3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer3>
    </>
  );
};

export default InfoSection3;
