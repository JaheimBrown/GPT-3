import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .gpt3-heading {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    margin-right: 4rem;

    p {
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      line-height: 30px;
      margin-top: 2rem;

      color: ${({ theme }) => theme.colorSubText};
    }
  }

  .gpt3__features-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    flex: 1.5;

    .wgpt3-feature__heading {
      font-weight: 800;
      font-size: 18px;
      line-height: 24px;
      padding-top: 1rem;

      letter-spacing: -0.04em;

      color: #ffffff;
    }
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;

    .gpt3-heading {
      margin-bottom: 3rem;
    }

    .gpt3__features-container {
      gap: 4rem;

      .wgpt3__feature {
        gap: 1rem;
      }
    }
  }
`;
