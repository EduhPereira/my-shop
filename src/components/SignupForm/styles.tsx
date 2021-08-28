import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: monospace;

  div {
    display: flex;
    flex-direction: column;
    margin: 12px 0;

    input {
      border-radius: 5px;
      border: 2px solid #313131;
      padding: 5px;
      outline: none;
      box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
      -webkit-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
      -moz-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
      transition: all 0.3s linear;
      :focus {
        border: 2px solid #2957fe;
      }
    }
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 35px;
    margin: 12px auto;
    font-weight: 900;
    font-family: inherit;
    text-transform: capitalize;
    background-color: #2957fe;
    color: #fff;
    box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
    -webkit-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);
    -moz-box-shadow: 11px 11px 8px 0px rgba(41, 41, 41, 0.75);

    transition: 0.3s linear;

    :hover {
      background-color: #4d70f1;
    }
    @media (max-width: 425px) {
      width: 80%;
    }
  }
`;
