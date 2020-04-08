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
    background: linear-gradient(160.09deg, rgba(47, 48, 97, 0) -33.64%, #2F3061 95.8%);
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  
  ul {
    list-style: none;
  }

  *::-webkit-scrollbar {
  width: 0.6em;
  height: 0.6em;
  margin-right: 50px;
}

*::-webkit-scrollbar-track {
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(47, 48, 97, .3);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(47, 48, 97, .4);
}
`;
