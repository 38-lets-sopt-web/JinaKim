import "@emotion/react";
import type { CustomTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: CustomTheme["colors"];
    fontSizes: CustomTheme["fontSizes"];
    fontWeights: CustomTheme["fontWeights"];
    radius: CustomTheme["radius"];
  }
}
