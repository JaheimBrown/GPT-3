import styled from "styled-components";

export const Wrapper = styled.div`
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );

  .wgpt3-feature {
    display: flex;
  }

  .wgpt3-features-container {
    margin: 0;

    .wgpt3-feature__text {
      max-width: 700px;
    }
  }

  .wgpt3-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    margin: 4rem 0 2rem;

    h1 {
      font-size: 34px;
      line-height: 45px;
      font-weight: 800;
      max-width: 510px;
    }

    p {
      font-size: 16px;
      line-height: 30px;
      font-weight: 500;
      min-width: 144px;
      margin-left: 2rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colorSubText};
    }

    @media screen and (max-width: 830px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      h1 {
        margin-bottom: 2rem;
      }

      p {
        margin: 0;
      }
    }
  }

  .wgpt3-features-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 2rem;
    width: 100%;

    .wgpt3__feature {
      flex-direction: column;
      align-items: flex-start;
      margin: 4rem 0;

      .wgpt3-feature__text {
        width: 100%;
      }
    }

    @media screen and (max-width: 1176px) {
      gap: 2rem;
      .wgpt3__feature {
        margin-bottom: 0;
      }
    }
  }
`;
