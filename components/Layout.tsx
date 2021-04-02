/** ********************************************************
 * Page layout - Global styles and any components that should be on all pages go here
 ********************************************************* */

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: '';
    src: url('') format('');
    font-weight: ;
    font-style: ;
  } */

  html {
    --black: #393939;
    --white: #ededed;
    --fontFamily: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',

    /* 
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09); // box shadow
    --maxWidth: 1000px;*/
    box-sizing: border-box;
    font-size: 62.5%;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--fontFamily);
    padding: 0;
    margin: 0;
    /* font-size: 1.5rem;
    line-height:2; */
  } 
  a {
    text-decoration: none;
    color: var(---black);
  }
  button {
    font-family: var(--fontFamily);
  }
`;

export default function Layout({ children }) {
  return (
    <>
      {children}
      <GlobalStyles />
    </>
  );
}
