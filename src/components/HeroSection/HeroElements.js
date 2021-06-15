import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Top2 from "../images/purple.jpg";
import Top from "../images/169.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 70vh;
    border: none;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background: #fff;
    border: none;
  }
`;

export const ImgBg = styled.img`
  width: 70%;
  height: 85%;
  margin: 5% 15%;

  -object-fit: cover;
  object-fit: cover;
  background-image: url(${Top2});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    -object-fit: cover;
    object-fit: cover;
    background-image: url(${Top2});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    top: 73.5%;
    left: 3%;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: "TsukuARdGothic-Regular", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
