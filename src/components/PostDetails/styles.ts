import styled from "styled-components";
import { centeredBlock } from "@/ui/mixins";

export const PostHeader = styled.header`
  margin-left: -2rem;
  margin-right: -2rem;

  h1 {
    ${centeredBlock};

    margin-top: 6rem;
    margin-bottom: 6rem;
    padding-bottom: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: 1px solid var(--border-color);

    font-weight: 600;
    font-size: 4rem;
    text-align: center;
  }

  img {
    display: block;
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
`;

export const PostContent = styled.div`
  ${centeredBlock};

  h2,
  h3 {
    font-weight: 600;
  }

  h2,
  h3 {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  > * + * {
    margin-top: 1rem;
  }

  pre,
  img {
    display: block;
    width: 90%;
    margin: 3rem auto;
    border-radius: 0.4rem;

    overflow: hidden;
  }

  ul {
    padding-left: 4rem;
  }

  ul li {
    list-style-type: disc;
    list-style-position: outside;
  }

  pre {
    padding: 2rem;

    overflow-x: auto;
  }

  p > code {
    font-family: monospace;
    font-size: 1.9rem;
    padding: 0 0.3rem;
    background: var(--code-background-color);
  }

  blockquote {
    padding: 2rem;
    border: 1px solid var(--border-color);
    border-left-width: 4px;

    font-style: italic;
  }
`;
