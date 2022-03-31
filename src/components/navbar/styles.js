import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  .navbar__links {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;

    .navbar__links__image-container {
      margin-right: 2rem;
      img {
        width: 62.56px;
        height: 16.02px;
      }
    }

    .navbar__links-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      p {
        color: #fff;
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        text-transform: capitalize;

        margin: 0 1rem;
        cursor: pointer;
      }

      @media screen and (max-width: 1050px) {
        display: none;
      }
    }
  }

  .navbar-sign {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      cursor: pointer;
      margin-right: 1rem;
    }

    .navbar-sign__signup {
      padding: 0.5rem 1rem;
      color: #fff;
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 18px;
      border: 0;
      outline: none;

      background: #ff4820;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .navbar-menu {
    display: none;
    margin-left: 1rem;

    svg {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1050px) {
    .navbar-menu {
      display: flex;
    }

    .navbar-menu-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      background-color: ${({ theme }) => theme.colorFooter};
      color: #fff;
      padding: 2rem;
      margin-top: 1rem;
      border-radius: 5px;
      min-width: 210px;
      position: absolute;
      top: 80px;
      right: 100px;
      box-shadow: 0 0 3 rgba(0, 0, 5, 0.2);

      svg {
        cursor: pointer;
      }

      .navbar__links-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 0.8rem;
      }

      .navbar-menu-sign {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 0.8em;

        p {
          margin-top: 12px;
        }

        .navbar-menu-sign__signup {
          padding: 0.5rem 1rem;
          color: #fff;
          font-family: ${({ theme }) => theme.fontFamily};
          font-size: 18px;
          border: 0;
          outline: none;

          background: #ff4820;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }

    .navbar-menu-sign__signup {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;

    .navbar-menu-container {
      right: 65px;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;

    .navbar-sign {
      display: none;
    }
    .navbar-menu-sign__signup {
      display: flex;
    }

    .navbar-menu-container {
      right: 42px;
    }
  }
`;
