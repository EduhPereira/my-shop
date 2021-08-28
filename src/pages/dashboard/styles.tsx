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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  color: #303030;
  margin: 0 0 12px;
  img {
    width: 100%;
    max-width: 1440px;
    height: 230px;
  }
  span {
    color: #f1f1f1;
    background-color: skyblue;
    margin: 24px 0;
    padding: 5px;
    box-shadow: 10px 10px 0px 0px rgba(7, 39, 82, 1);
    -webkit-box-shadow: 10px 10px 0px 0px rgba(7, 39, 82, 1);
    -moz-box-shadow: 10px 10px 0px 0px rgba(7, 39, 82, 1);
  }
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
