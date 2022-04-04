import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colorFooter};
  margin-top: 5rem;
  padding-bottom: 2rem !important;

  .gpt3__footer-heading {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: center;

    h2 {
      font-size: 62px;
      font-weight: 800;
      line-height: 75px;
      text-align: center;
      letter-spacing: -0.04em;
      margin-bottom: 3.5rem;
    }

    p {
      border: 1px solid #ffffff;
      box-sizing: border-box;
      font-size: 18px;
      font-family: ${({ theme }) => theme.fontFamily};
      line-height: 21px;
      color: #ffffff;
      padding: 24px 12px;
      margin-bottom: 3.5rem;
      cursor: pointer;
    }

    @media screen and (max-width: 950px) {
      h2 {
        font-size: 48px;
        line-height: 64px;
      }

      P {
        font-size: 16px;
        line-height: 20px;
        padding: 1rem 1.25rem;
      }
    }

    @media screen and (max-width: 600px) {
      h2 {
        font-size: 32px;
        line-height: 48px;
      }

      P {
        font-size: 14px;
        line-height: 20px;
        padding: 1rem 1.25rem;
      }
    }
  }

  .gpt3__footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    margin-top: 2rem;

    .gpt3__footer-logo {
      margin-right: 5rem;
      img {
        width: 118px;
        height: 30px;
      }

      p {
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        margin-top: 1rem;
      }
    }

    .gpt3__footer-links {
      max-width: 100%;
      min-width: 350px;
      h4 {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 1.25rem;
        color: #ffffff;
      }

      p {
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        margin-bottom: 1rem;
      }
    }

    @media screen and (max-width: 950px) {
      .gpt3__footer-logo {
        margin-bottom: 2rem;
      }
      .gpt3__footer-links {
        margin-bottom: 2rem;
      }
    }
  }

  .gpt3__footer-rights {
    text-align: center;
    margin-top: 3rem;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }
`;
