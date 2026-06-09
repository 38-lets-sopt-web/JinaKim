const theme = {
  colors: {
    primary: "#102A43", // 메인 컬러: 헤더, 주요 텍스트, 강조 영역
    primaryLight: "#183B56", // 메인 컬러보다 살짝 밝은 색: hover, 서브 헤더, 보조 강조

    button: "#38BDF8",
    buttonHover: "#0284C7",
    buttonDisabled: "#CBD5E1",

    background: "#F1F5F9", //전체 배경
    surface: "#edede8", //콘텐츠 영역 배경 색

    textMain: "#1E293B",
    textSub: "#8595aca5",

    border: "#CBD5E1",

    error: "#EF4444",
    white: "#FFFFFF",
  },

  fontSizes: {
    lg: "1.5rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },
};

export default theme;

export type CustomTheme = typeof theme;
