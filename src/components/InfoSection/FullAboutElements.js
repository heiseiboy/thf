import styled from "styled-components";

export const FullAboutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background: #fffafa;

  @media screen and (max-width: 768px) {
    height: 45vh;
    margin-bottom: 0;
  }
`;

export const FullAboutWrapper = styled.div`
  width: 80%;
  height: 70%;
  margin: 8.5% 15%;
  background: #f5f5f5;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 80%;
    margin: 10% 10%;
  }
`;

export const FullAboutTop = styled.div`
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
  font-weight: 200;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TopSub = styled.p`
  font-size: 12px;
  opacity: 0.8;
  margin-top: 2%;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const FullAboutText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 5% 33%;

  @media screen and (max-width: 768px) {
    padding: 10% 10%;
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 32px;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 24px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgL = styled.img`
  display: flex;
  width: 90%;
  margin: 5% 5%;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    margin: 5% 5%;
  }
`;

export const ImgS = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    margin: 5% 5%;
  }
`;
