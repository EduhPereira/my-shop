import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Col1 = styled.div`
  width: 50%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  h1 {
    font-family: monospace;
    color: #303030;
    margin: 12px;
  }
  img {
    border-radius: 5px;
    width: 130px;
    height: 130px;
  }
  div {
    margin: 8px 0;
    font-size: 0.8rem;
    font-family: monospace;
    span {
      color: #2957fe;
      font-weight: 700;
      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
