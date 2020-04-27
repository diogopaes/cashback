import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 920px;
  min-height: 600px;
  align-items: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  border-top: 3px;
  border-top: 5px solid #ffc200;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
    height: 130px;

    @media (min-width: 700px) {
      flex-direction: column;
      height: auto;
    }

    span {
      @media (min-width: 700px) {
        text-align: center;
      }

      h2 {
        color: #333333;
        margin-bottom: 5px;
        font-size: 40px;
      }

      h4 {
        font-weight: 400;
        color: #888787;
        margin-bottom: 0px;
      }
    }
    svg {
      width: 80px;
      @media (min-width: 700px) {
        width: auto;
      }
    }
  }

  form {
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

    hr {
      border: 0;
      height: 1px;
      margin-top: 20px;
      background-color: #e6e6e6;
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
      transition: all 0.2s cubic-bezier(0, 0.46, 0.42, 1.37);

      &:hover {
        transform: scale(1.1);
      }
    }

    span {
      color: red;
      margin-top: 10px;
      font-size: 12px;
    }

    margin-bottom: 20px;
  }
`;
