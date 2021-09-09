import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  
    &.locked, .locked{
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button, input {
    font-family: 'Poppins', sans-serif;
  }

  button{
    cursor: pointer;
    border: none;
  }

`;
