import styled from "styled-components";
import { HStack } from "@/ui/HStack";

export const PostPreviewLayout = styled.article`
  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-weight: 600;
    font-size: 2.5rem;
  }
`;

export const PostInfo = styled(HStack)`
  font-size: 1.2rem;
  color: var(--text-color-hint);
`;
