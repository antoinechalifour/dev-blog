import styled from "styled-components";

import { centeredBlock } from "@/ui/mixins";

export const AuthorLayout = styled.header`
  ${centeredBlock};

  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 1rem 2rem;
  align-items: center;

  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid var(--border-color);

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  img {
    width: 100%;
    border-radius: 100%;
    grid-row: 1 / span 2;
  }

  dl {
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  dt {
    font-weight: bold;
  }
`;
