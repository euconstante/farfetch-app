// src/styles/global.ts

import { css } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Arial, sans-serif;
    background-color: var(--white);
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
    color: var(--dark);
  }

  a:hover {
    text-decoration: underline;
  }

  /* Add additional global styles here as needed */
`;

export default globalStyles;
