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
  }
`;
