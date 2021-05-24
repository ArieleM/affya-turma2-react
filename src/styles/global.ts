import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
    letter-spacing: 1px;
  }

  html{
    scroll-behavior: smooth;
  }

  .container{
    width: 60%;
    margin: auto;
  }
`;