import { css, Global, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.textMain};
          overflow-x: hidden;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body,
        p,
        h1,
        h2,
        input,
        button {
          margin: 0;
          padding: 0;
        }

        a {
          width: fit-content;
          color: inherit;
          text-decoration: none;
        }

        button {
          color: ${theme.colors.white};
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
