import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .header-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    margin-right: 2rem;

    h1 {
      font-family: "Manrope";
      font-weight: bold;
      font-size: 58px;
      line-height: 75px;
      letter-spacing: -0.04em;
      margin-bottom: 2rem;
    }

    p {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: ${({ theme }) => theme.colorText};
    }
  }

  .header__input {
    width: 100%;
    margin: 2rem 0 1rem;

    display: flex;

    input {
      flex: 2;
      width: 100%;
      font-size: 20px;
      line-height: 27px;
      background: ${({ theme }) => theme.colorFooter};
      border: 2px solid ${({ theme }) => theme.colorFooter};
      color: #fff;
      border-radius: 5px 0px 0px 5px;
      border: none;
      outline: none;
      min-height: 55px;
      padding: 0 1rem;

      ::placeholder {
        color: ${({ theme }) => theme.colorText};
      }
    }

    button {
      flex: 0.6;
      width: 100%;
      min-height: 55px;
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 20px;
      font-weight: bold;
      line-height: 27px;
      background: ${({ theme }) => theme.primary};
      color: #fff;
      padding: 0 1rem;
      border: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }
  }

  .header-people {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-self: flex-start;

    img {
      height: 36px;
    }

    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 38px;
      margin: 0 0 0 1rem;
    }
  }

  .header-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: relative;
      left: 2rem;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1050px) {
    flex-direction: column;

    .header-container {
      margin: 0 0 3rem;

      h1 {
        font-size: 48px;
        line-height: 60px;
      }

      p {
        font-size: 1rem;
        line-height: 24px;
      }

      .header-people {
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;

        p {
          margin: 12px 0 0 0;
          text-align: center;
        }
      }
    }
    .header-image {
      img {
        position: static;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .header-container {
      h1 {
        font-size: 36px;
        line-height: 48px;
      }

      p {
        font-size: 14px;
        line-height: 24px;
      }

      .header__input {
        button,
        input {
          font-size: 14px;
        }
      }
    }
  }
`;
