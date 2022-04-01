import { createGlobalStyle } from "styled-components";

// Global Styling
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${({ theme }) => theme.colorBg};
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .gradient__bg {
    background:-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%);
  }

  .gradient__text {
    background: ${({ theme }) => theme.gradientText};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section__padding{
    padding: 4rem 6rem;
  }

  .section__margin{
    margin: 4rem 6rem;
  }

  /* Animations */
  .scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

/* Media Queries */
@media screen and (max-width: 700px) {
  .section__padding {
    padding: 4rem;
  }

  .section__margin {
    margin: 4rem;
  }
}

@media screen and (max-width: 700px) {
  .section__padding {
    padding: 4rem 2rem;
  }

  .section__margin {
    margin: 4rem 2rem;
  }
}

`;

// Theme Files
const theme = {
  gradientText: "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
  gradientBar: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
  colorBg: "#040C18",
  colorFooter: "#031B34",
  colorText: "#81AFDD",
  colorSubText: "#FF8A71",
  fontFamily: "'Manrope', sans-serif",
  primary: "#ff4820",
};

export default theme;
