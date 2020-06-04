import styled from "styled-components";

export const HStack = styled.div`
  display: flex;

  > * + * {
    margin-left: 1rem;
  }
`;
