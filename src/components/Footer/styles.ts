import styled from "styled-components";

import { centeredBlock } from "@/ui/mixins";

export const FooterLayout = styled.footer`
  display: flex;
  align-items: center;
  height: 10rem;
  margin-top: 6rem;
  border-top: 2px solid var(--border-color);
  background: var(--footer-background-color);

  > * {
    ${centeredBlock};
  }
`;
