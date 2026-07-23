/** Styled-components theme (dark / light) */
export const darkTheme = {
  bg: "#1C1C27",
  bgLight: "#1C1E27",
  primary: "#854CE6",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "#171721",
  card_light: "#191924",
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
  text_black: "#111111",
  soft2: "#b1b2b3",
};

export const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#f0f0f0",
  primary: "#be1adb",
  text_primary: "#111111",
  text_secondary: "#48494a",
  card: "#FFFFFF",
  card_light: "#f5f5f5",
  button: "#5c5b5b",
  white: "#FFFFFF",
  black: "#000000",
  text_black: "#111111",
  soft2: "#48494a",
};

/** Layout tokens (breakpoints, fonts) — optional use in styled-components */
const layoutTheme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    primary1: "#854CE6",
    background1: "#222A35",
    button: "#854CE6",
    background2: "#19212C",
    text: "#C8CFD8",
    text1: "#F2F5F7",
    text2: "#626970",
    text3: "#575C66",
    footerBackground: "#00012B",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export default layoutTheme;
