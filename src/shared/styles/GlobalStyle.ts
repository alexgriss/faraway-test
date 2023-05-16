import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;

    background-color: ${({ theme }) => theme.color.background};

    font-family: Vollkorn, Arial, Helvetica, sans-serif;
    font-size: 16px;

    color: ${({ theme }) => theme.color.text};
  }


  * {
    box-sizing: border-box;
  }

  ul,
  ol,
  dl,
  li,
  dt,
  dd {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }

  button,
  select {
    text-transform: none;
  }

  button {
    cursor: pointer;
  }

  button:disabled:hover {
    cursor: default;
  }

  table {
    width: 100%;

    border-collapse: collapse;
  }
`;
