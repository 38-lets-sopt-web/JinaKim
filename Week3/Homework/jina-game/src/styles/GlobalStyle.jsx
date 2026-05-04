import { Global, css } from "@emotion/react";
import Colors from "./Colors";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
        }

        body {
          background-color: ${Colors.Main10};
          color: ${Colors.Main60};
          overflow-x: hidden;
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
        button,
        table,
        th,
        td {
          margin: 0;
          padding: 0;
        }

        button,
        select {
          border: none;
          background: none;
          cursor: pointer;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
      `}
    />
  );
};

export default GlobalStyle;
