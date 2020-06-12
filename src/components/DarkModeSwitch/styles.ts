import styled from "styled-components";

export const LabelLayout = styled.label`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  align-items: center;
  cursor: pointer;

  input {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  input + span {
    position: relative;
    display: block;
    height: 1.6rem;
    width: 2.8rem;
    border: 1px solid var(--switch-border-color);
    border-radius: 1rem;
  }

  input + span:before {
    position: absolute;
    top: 50%;
    left: 1px;
    right: auto;
    transform: translateY(-50%) translateX(0);
    content: "";
    height: 1.2rem;
    width: 1.2rem;
    background: var(--switch-handle-color);
    border-radius: 50%;

    transition: all 0.2s ease;
  }

  input:checked + span:before {
    transform: translateY(-50%) translateX(100%);
  }

  input:focus + span {
    outline: auto 5px -webkit-focus-ring-color;
  }
`;
