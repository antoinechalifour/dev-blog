import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeTheme from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";

interface CodeBlockProps {
  value: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ value, language }) => (
  <SyntaxHighlighter
    language={language}
    style={codeTheme}
    customStyle={{ padding: null, margin: null, overflow: null }}
    showLineNumbers={true}
  >
    {value}
  </SyntaxHighlighter>
);
