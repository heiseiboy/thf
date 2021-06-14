import styled from "styled-components";
import { FaLeaf } from "react-icons/fa";

export const InfoContainer = styled.div`
  color: #fff;
  padding-top: 50px;
  background: #fffafa;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const InfoContainer2 = styled.div`
  color: #fff;
  padding-top: 50px;
  background: #e1e1fa;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const InfoContainer3 = styled.div`
  color: #fff;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media and screen (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  padding-left: 100px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`;

export const ColumnCenter = styled.div`
  padding-left: 100px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-top: -40px;
    margin-right: -10px;
    padding: 0;
  }
`;

export const Column3 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-top: -40px;
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  position: relative;

  @media screen and (max-width768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TopLine = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    letter-spacing: 3px;
    font-weight: 100;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
export const TopLine2 = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    letter-spacing: 3px;
    font-weight: 100;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
export const TopLine3 = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 33%;
    letter-spacing: 3px;
    font-weight: 100;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  display: flex;
  padding-right: 50px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  font-family: "TsukuARdGothic-Regular", sans-serif;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 36px;
  }
`;

export const SubTitleCenter = styled.p`
  max-width: 440px;
  display: flex;
  padding-right: 50px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  font-family: "TsukuARdGothic-Regular", sans-serif;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 36px;
    padding: 0 13%;
  }
`;

export const Leaf = styled(FaLeaf)`
  color: #c4e538;

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    position: absolute;
    top: 70px;
    right: 30px;
    z-index: 11;
  }
`;

export const BtnWrap = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    background: #c4e538;
    border-radius: 50px;
  }
`;

export const ButtonD = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    color: #000;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgWrap2 = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 10%;
  }
`;
export const ImgWrap3 = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding-top: 10%;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 768px) {
    padding-left: 35%;
    height: 260px;
  }
`;

export const Img2 = styled.img`
  max-width: 300px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding-right: 15%;
  }
`;

export const Img3 = styled.img`
  max-width: 300px;
  margin: 0 0 10px 0;

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    padding-right: 0;
    margin: 0;
  }
`;
