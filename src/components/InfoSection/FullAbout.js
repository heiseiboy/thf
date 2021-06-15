import React from "react";

import {
  FullAboutContainer,
  FullAboutWrapper,
  FullAboutTop,
  TopH1,
  TopSub,
  FullAboutText,
  Text,
  Img,
} from "./FullAboutElements";

import HBT from "../images/169.jpg";

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
              埼玉のとある青年たちが
              第6次産業をはじめました。ホーリーバジル大切に育てています
              <br />
              通称　Tulsi(トゥルシー)
              <br />
            </Text>
          </FullAboutText>
        </FullAboutWrapper>
      </FullAboutContainer>
      <Img src={HBT} alt="hbt" />
    </>
  );
};

export default FullAbout;
