const theme = {
  colors: {
    // background
    background: "#F3F4F6", // 전체 페이지 배경
    surfaceMuted: "#F9FAFB", // input, select, hover 배경

    // text
    textPrimary: "#111827", // 제목, 중요한 텍스트
    textSecondary: "#374151", // 일반 본문
    textMuted: "#6B7280", // 날짜, 설명, 보조 정보
    textLight: "#9CA3AF", // placeholder, 약한 텍스트

    // border
    border: "#E5E7EB", // 카드, input, 태그 border
    borderLight: "#F0F0F0", // 내부 구분선

    // button
    buttonPrimary: "#111827", // 리뷰 남기기 버튼
    buttonPrimaryHover: "#1F2937",

    // state
    error: "#EF4444",

    // common
    black: "#000000",
    white: "#FFFFFF",
  },

  fontSizes: {
    sm: "0.8rem",
    md: "1.0rem",
    lg: "1.6rem",
    xl: "2rem",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  radius: {
    sm: "0.6rem", // 버튼, 태그, input
    md: "1rem", // 카드
    lg: "1.6rem", // 큰 섹션 박스
  },
};

export default theme;

export type CustomTheme = typeof theme;
