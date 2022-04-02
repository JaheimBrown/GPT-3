import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    flex: 1;
    max-width: 150px;
    min-height: 120px;
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
