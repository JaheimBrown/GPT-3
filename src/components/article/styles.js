import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .img-container {
    width: 100%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: over;
    }
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colorFooter};
    padding: 2rem;
    width: 100%;
    height: 100%;

    P {
      font-size: 11.649px;
      font-weight: 700;
      line-height: 35px;
      color: #ffffff;
    }

    h4 {
      font-size: 25.11px;
      font-weight: 800;
      line-height: 30px;
      color: #ffffff;
    }

    p:last-child {
      font-size: 11.649px;
      font-weight: 700;
      line-height: 35px;
      cursor: pointer;
      color: #ffffff;
    }
  }
`;
