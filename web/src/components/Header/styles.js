import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 0 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 920px;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    img {
      margin-bottom: 10px;
    }
  }

  nav {
    display: flex;
    small {
      padding: 10px 15px;
      font-size: 25px;
      color: #ffffff3b;
      font-weight: 200;
    }
  }
`;

export const User = styled.div`
  display: flex;
  > div {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 14px;
      color: #fff;
      margin-bottom: 5px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        a {
          color: #ffc200;
        }

        :first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const Cash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  h3 {
    color: #fff;
  }

  span {
    color: #ffc200;
  }
  svg {
    /* animation: animationFrames 1.3s linear infinite alternate;

    @keyframes animationFrames {
      0% {
        transform: scaleX(1);
      }
      24% {
        transform: scaleX(0.47);
      }
      44% {
        transform: scaleX(0.02);
      }
      62% {
        transform: scaleX(-0.36);
      }
      82% {
        transform: scaleX(-0.71);
      }
      100% {
        transform: scaleX(-1);
      }
    } */
  }
`;
