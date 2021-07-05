import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  ImgBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroH2,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const thf = () => {
    window.open("https://t-hope.store");
  };

  const thfbase = () => {
    window.open("https://thopefarm.base.shop/");
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <ImgBg />
        </HeroBg>
        <HeroContent>
          <HeroH1>おうちカフェ</HeroH1>
          <HeroH2>T-HOPE ファーム</HeroH2>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
              onClick={thf}
            >
              Shopifyで購入{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
              onClick={thfbase}
            >
              BASEで購入{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
