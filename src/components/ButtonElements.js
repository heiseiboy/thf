import styled from "styled-components";

export const Button = styled.div`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#C4E538" : "#010606")};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 150;
  width: 100%;
  padding: 8% 8% 8% 15%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
