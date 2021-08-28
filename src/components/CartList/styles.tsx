import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  font-family: monospace;
  padding: 5px;
  img {
    height: 70%;
    width: 70%;
  }
  div {
    text-align: center;
    font-size: 1.2rem;
    color: #2b2b2b;
  }
`;
