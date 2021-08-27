import styled from "styled-components";

export const Header = styled.header`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const CurrentComponent = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  text-transform: capitalize;
  border-radius: 5px;
`;

export const ProductsBtn = styled(Button)`
  background-color: transparent;
  border: 2px solid blue;
  color: blue;
`;

export const CartBtn = styled(Button)`
  background-color: blue;
  border: none;
  color: white;
`;

export const LogoffBtn = styled(Button)`
  background-color: transparent;
  border: 2px solid red;
  color: red;
`;
