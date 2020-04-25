import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 360px;
    text-align: center;
  }

  img {
    width: 200px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 3px;
    padding: 30px 30px;
    border-top: 5px solid #ffc200;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

    h2 {
      color: #333333;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    h4 {
      font-weight: 400;
      color: #888787;
    }

    input {
      margin-top: 20px;
      border: 1px solid #888787;
      border-radius: 3px;
      padding: 15px;
      width: 100%;
      color: #333333;
      transition: border 0.2s linear;

      &:focus {
        border: 1px solid #ffc200;
      }

      &::placeholder {
        color: #c7c7c7;
      }
    }

    button {
      width: 100%;
      height: 70px;
      margin-top: 20px;
      border-radius: 3px;
      background-color: #ffc200;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      transition: all 0.3s linear;

      &:hover {
        background-color: #d3a100;
      }
      &:active {
        border: 8px solid #ffc200;
      }
    }

    span {
      color: red;
      margin-top: 10px;
      font-size: 12px;
    }

    margin-bottom: 20px;
  }

  span {
    color: #fff;

    a {
      color: #ffc200;
      margin-left: 5px;
      transition: all 0.2s linear;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
