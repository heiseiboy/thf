import React from "react";

import {
  FullAboutContainer,
  FullAboutWrapper,
  FullAboutTop,
  TopH1,
  TopSub,
  FullAboutText,
  Text,
  ImgL,
  ImgS,
  ImgWrap,
} from "./FullAboutElements";

import HBT1 from "../images/baji169.jpg";
import HBT2 from "../images/169.jpg";

const FullAbout = () => {
  return (
    <>
      <FullAboutContainer id="about">
        <FullAboutWrapper>
          <FullAboutTop>
            <TopH1>About</TopH1>
            <TopSub>T-HOPE ファームについて</TopSub>
          </FullAboutTop>
          <FullAboutText>
            <Text>
              埼玉のとある青年たちが第6次産業をはじめました。農家としてホーリーバジルを大切に育てています。
              <br />
              ホーリーバジル
              <br />
              通称　Tulsi(トゥルシー)
              <br />
            </Text>
          </FullAboutText>
        </FullAboutWrapper>
      </FullAboutContainer>
      <ImgWrap>
        {/* <ImgL src={HBT1} alt="hbt" /> */}
        <ImgS src={HBT2} alt="hbt2" />
      </ImgWrap>
    </>
  );
};

export default FullAbout;
