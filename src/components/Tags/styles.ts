import styled from "styled-components";

interface TagProps {
  backgroundColor: string;
}

export const Tag = styled.span`
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.4rem;
  overflow: hidden;

  line-height: 1;
  font-weight: 600;
  font-size: 1.2rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    opacity: 0.2;
    background: ${({ backgroundColor }: TagProps) => backgroundColor};
  }
`;
