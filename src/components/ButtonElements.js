import styled from "styled-components";

export const Button = styled.div`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#C4E538" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "10px 20px;")};
  font-size: ${({ fontBig }) => (fontBig ? "16px" : "12px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 150;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
