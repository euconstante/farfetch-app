// src/styles/global.ts

import { css } from "@emotion/react";

const globalStyles = css`
  /* Reset some default browser styles */
  body {
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
    background-color: #f0f0f0;
  }

  /* Apply a box-sizing rule to all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Set global styles for links */
  a {
    text-decoration: none;
    color: #0070f3;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Add additional global styles here as needed */
`;

export default globalStyles;
