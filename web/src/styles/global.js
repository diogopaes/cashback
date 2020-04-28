import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: #333;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    transition: all .2s cubic-bezier(0, 0.46, 0.42, 1.37);
  }

  a:hover{
    transform: scale(1.1);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
