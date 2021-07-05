import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Top from "../images/purple169tate.jpg";
import Top2 from "../images/shouhin.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -70px;

  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 70vh;
    border: none;
    margin-top: 0;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    top: 0;
    background: #fff;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;

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
    background-image: url(${Top});
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
  top: 33.5%;
  left: 10%;

  @media screen and (max-width: 768px) {
    display: flex;
    top: 70.5%;
    left: 3%;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  font-family: "Baloo Tammudu 2", cursive;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  color: #bfdea0;

  @media screen and (max-width: 768px) {
    display: none;
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
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
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
