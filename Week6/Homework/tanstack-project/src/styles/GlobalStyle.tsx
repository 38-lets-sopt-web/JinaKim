import { css, Global, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.colors.background};
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body,
        h1,
        h2,
        p,
        ul,
        input,
        button {
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        input {
          border: none;
          outline: none;
          background: none;
          appearance: none;
          color: inherit;
        }

        select {
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyle;
