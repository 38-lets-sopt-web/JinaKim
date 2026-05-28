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
        p {
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
