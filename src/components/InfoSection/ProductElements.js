import styled from "styled-components";
import dryBasil from "../images/dryBasil.jpg";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10% 0;
  max-width: 100vw;
  width: 80vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    background: #fff;
    height: 45vh;
    padding: 0;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  margin: 3.5% 2%%;
  background: transparent;
  align-items: center;
  flex-direction: column;
  margin: 0 0 0 35%;

  @media screen and (max-width: 768px) {
    background: #fff;
    align-items: center;
    margin: 9% 10%;
    color: #000;
  }
`;

export const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const TopH1 = styled.h1`
  font-size: 32px;
  letter-spacing: 3px;
  color: #161a12;
  font-weight: 150;

  span {
    color: #dda0dd;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TopSub = styled.p`
  font-size: 24px;
  opacity: 0.8;
  margin-top: 2%;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ProductText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 3% 29%;

  @media screen and (max-width: 768px) {
    padding: 10% 4%;
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 36px;
  opacity: 0.8;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 4px;
  }
`;

export const ProductImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 50vh;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100vw;
    margin: 0;
  }
`;

export const ImgP = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
    width: 46vw;
    margin: 2% 2% 2% 2%;
  }
`;
export const ImgP2 = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
    width: 46vw;
    margin: 2% 2% 2% 2%;
  }
`;
export const ImgP3 = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: contain;
  width: 46vw;
  margin: 2% 2% 2% 2%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
