import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%; 
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px; 
    background: #DFDFDF;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  
  ul {
    list-style: none;
  }
`;
