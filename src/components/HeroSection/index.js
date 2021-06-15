import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  ImgBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const thf = () => {
    window.open("https://t-hope.store");
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
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
              onClick={thf}
            >
              購入はこちら{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
