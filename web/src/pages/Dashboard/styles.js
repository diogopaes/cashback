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
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  border-top: 3px;
  border-top: 5px solid #ffc200;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  a {
    color: #fff;
    background-color: #333;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;

    svg {
      margin-right: 10px;
    }
  }

  ul {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      border: 1px solid #e4e4e4;
      border-radius: 3px;
      padding: 40px;
      text-align: center;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

      hr {
        border: 0;
        height: 1px;
        margin-top: 20px;
        margin-bottom: 15px;
        background-color: #f7f7f7;
      }

      strong {
        font-size: 16px;
        color: #333;
        font-weight: 400;
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
`;

export const ItemGroup = styled.div`
  text-align: left;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  > div {
    text-align: center;
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;

export const CashBack = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
  span {
    border: 1px solid #333;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px !important;
      color: #333 !important;
    }
    @media (max-width: 480px) {
      margin: 0 auto;
    }
  }

  > div {
    text-align: left;
    @media (max-width: 480px) {
      text-align: center;
      margin-top: 10px;
    }
    h1 {
      color: #ffc200;
      margin-top: 5px;
    }
  }
`;
