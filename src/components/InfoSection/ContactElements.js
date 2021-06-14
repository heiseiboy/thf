import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    font-size: 14px;
    letter-spacing: 4px;
    height: 50vh;
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
export const Text = styled.p`
  font-size: 24px;
  padding-bottom: 10%;
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
