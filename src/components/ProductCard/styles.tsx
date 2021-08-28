import styled, { css } from "styled-components";

interface ButtonStyledProps {
  isSelected: boolean;
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 16px 0;
  width: 220px;
  height: 440px;
  text-align: center;
  font-family: monospace;
  border-radius: 5px;
  gap: 8px;

  h1 {
    font-size: 1rem;
  }
  img {
    height: 300px;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

export const Button = styled.button<ButtonStyledProps>`
  margin: 12px auto;
  padding: 5px;
  border: none;
  border-radius: 3px;
  width: 70%;
  background-color: skyblue;
  color: #202020;
  text-transform: capitalize;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f37676;
    `}
`;
