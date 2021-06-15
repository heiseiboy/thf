import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 4px;
  line-height: 24px;
  height: 50vh;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const TopText = styled.p`
  font-size: 32px;
  padding-bottom: 10%;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 20px;
`;

export const SubText = styled.div`
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
`;
