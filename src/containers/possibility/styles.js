import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .possibilities__image-container {
    flex: 1;
    margin-right: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .possibilities__content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding-top: 4rem;

    h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      color: #71e5ff;
    }

    h4:last-child {
      color: ${({ theme }) => theme.colorSubText};
    }

    h2 {
      font-size: 34px;
      font-weight: 800;
      line-height: 45px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
      margin: 1rem 0;
      color: ${({ theme }) => theme.colorText};
    }
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    .possibilities__image-container {
      margin: 0;
    }
  }
`;
