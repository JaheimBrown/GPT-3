import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  .gpt3__blog-heading {
    h2 {
      font-weight: 800;
      font-size: 62px;
      line-height: 75px;
      letter-spacing: -0.04em;
      margin-bottom: 4rem;
    }
  }

  .gpt3__blog-container_blogs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    height: 90%;
    flex: 1;

    .gpt3__blog-conatiner_blogs-groupA {
      flex: 0.8;
      width: 100%;
      height: 100%;
      flex: 0.8;

      @media screen and (max-width: 950px) {
        width: 48%;
      }

      @media screen and (max-width: 650px) {
        width: 100%;
      }
    }

    .gpt3__blog-container_blogs-groupB {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      width: 100%;
      height: 100%;
      flex: 1;

      @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 950px) {
      flex-direction: column-reverse;
      height: auto;
    }
  }
`;
