import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;

  .wgpt3-feature__heading {
    position: relative;
    align-self: flex-start;
    font-size: 24px;
    font-weight: 800;
    line-height: 75px;
    letter-spacing: -0.04em;
    min-width: 150px;
    color: #ffffff;
    margin-right: 4rem;
  }

  .wgpt3-feature__text {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    max-width: 750px;

    color: ${({ theme }) => theme.colorText};
  }

  .bar {
    position: absolute;
    left: 0;
    top: -0px;
    background: ${({ theme }) => theme.gradientBar};
    height: 6px;
    width: 48px;
    border-radius: 8px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
