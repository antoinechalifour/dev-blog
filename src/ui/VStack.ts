import styled from "styled-components";

interface VStackProps {
  spacing?: number;
}

export const VStack = styled.div`
  display: grid;
  grid-gap: ${({ spacing = 1 }: VStackProps) => spacing}rem;
`;
