import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10.7236px;
  padding: 2rem;
  background: ${({ theme }) => theme.gradientBar};

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 30px;
    color: #0e0e0e;
  }

  h4 {
    font-size: 24px;
    font-weight: 800;
    line-height: 45px;
    color: #000000;
  }

  button {
    background: #000000;
    border-radius: 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    min-width: 150px;
    padding: 12px 1rem;
    outline: 0;
    border: 0;
    color: #ffffff;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    text-align: center;

    button {
      margin-top: 2rem;
    }
  }
`;
