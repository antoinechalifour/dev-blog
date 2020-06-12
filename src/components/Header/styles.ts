import styled from "styled-components";

import { centeredBlock } from "@/ui/mixins";

export const HeaderLayout = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 2px solid var(--border-color);
  padding: 0 2rem;

  background: var(--header-background-color);

  > nav {
    ${centeredBlock};
    display: grid;
    grid-template-columns: 40px 1fr auto;
    align-items: center;
    grid-gap: 2rem;
  }

  img {
    width: 100%;
  }

  p {
    padding: 2rem 0;
    font-weight: 600;
  }

  a {
    display: block;
    line-height: 1;
  }
`;
