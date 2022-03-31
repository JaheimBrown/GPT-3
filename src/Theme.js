import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }
`;

const theme = {
  gradientText: "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
  gradientBar: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
  colorBg: "#040C18",
  colorFooter: "#031B34",
  colorText: "#81AFDD",
  colorSubText: "#FF8A71",
};

export default theme;
