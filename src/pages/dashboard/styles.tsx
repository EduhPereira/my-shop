import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  height: 95%;
  justify-content: flex-end;
`;

export const CurrentComponent = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  color: #303030;
  margin: 12px 0;
`;

const Button = styled.button`
  width: 35px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background-color: transparent;
`;

export const ProductsBtn = styled(Button)`
  color: #2957fe;
`;

export const CartBtn = styled(Button)`
  color: #2957fe;
`;

export const LogoffBtn = styled(Button)`
  color: red;
`;
