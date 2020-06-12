import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    --background-color: #f9f9f9;
    --text-color: #373737;
    --text-color-hint: #777;
    --border-color: #ddd;
    --header-background-color: #fff;
    --footer-background-color: #fff;
    --link-color: #b33e2f;
    --code-background-color: #ddd;
    --switch-border-color: #777;
    --switch-handle-color: #777;
  
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
    
    background: var(--background-color);
    color: var(--text-color);
    
    transition: all .2s ease;
  }
  
  body.dark {
    --background-color: #1f1f1f;
    --text-color: #fff;
    --text-color-hint: #ddd;
    --border-color: #2f2f2f;
    --header-background-color: #171717;
    --footer-background-color: #171717;
    --link-color: #fe845f;
    --code-background-color: #101010;
    --switch-border-color: #ddd;
    --switch-handle-color: #ddd;
  }
  
  strong {
    font-weight: bold;
  }
  
  em {
    font-style: italic;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    color: var(--link-color);
    font-weight: 600;
  }
`;

export const Theme: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
