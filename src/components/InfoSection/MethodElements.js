import styled from "styled-components";

export const MethodContainer = styled.div`
  display: flex;
  position: static;
  width: 100%;
  height: 45vh;
  z-index: 1;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    background: #fff;
    background-image: none;
    height: 45vh;
    margin-bottom: 5%;
  }
`;

export const MethodWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin: 0% 10%;
  background: transparent;
  align-items: center;
  flex-direction: column;
  color: #000;

  @media screen and (max-width: 768px) {
    background: #fff;
    align-items: center;
    margin: 9% 10%;
    color: #000;
  }
`;

export const MethodTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const TopH1 = styled.h1`
  font-size: 48px;
  font-weight: 200;
  letter-spacing: 3px;

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

export const MethodText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 3% 30%;

  @media screen and (max-width: 768px) {
    padding: 10% 10%;
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  letter-spacing: 3px;
  line-height: 36px;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 4px;
  }
`;

export const Img = styled.img`
  display: flex;
  height: 80vh;
  width: 80vw;
  margin: 10 auto;
  padding-top: 5%;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
    margin: 0;
  }
`;
