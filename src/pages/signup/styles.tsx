import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const appearFromLeft = keyframes`
    from{
        opacity:0;
        transform: translateX(-70px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Col1 = styled.div`
  width: 50%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    animation: ${appearFromLeft} 1s linear;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const appearFromRight = keyframes`
    from{
        opacity:0;
        transform: translateX(70px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Col2 = styled.div`
  display: flex;
  background-color: skyblue;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  h1 {
    font-family: monospace;
    color: #303030;
    margin: 24px 0;
    animation: ${appearFromRight} 1s linear;
  }
  img {
    border-radius: 5px;
    width: 130px;
    height: 130px;
    animation: ${appearFromRight} 1s linear;
    box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
    -webkit-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
    -moz-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
  }
  div {
    margin: 8px 0;
    font-size: 0.8rem;
    font-family: monospace;
    animation: ${appearFromRight} 1s linear;
    span {
      color: #2957fe;
      font-weight: 700;
      cursor: pointer;
    }
  }

  button {
    animation: ${appearFromRight} 1s linear;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
