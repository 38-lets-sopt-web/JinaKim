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
      `}
    />
  );
};

export default GlobalStyle;
