import React from "react";
import Markdown from "react-markdown";

import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

import { PostContent, PostHeader } from "./styles";

interface PostDetailsProps {
  title: string;
  source: string;
  heroImageUrl: string;
}

export const PostDetails: React.FC<PostDetailsProps> = ({
  source,
  title,
  heroImageUrl,
}) => (
  <>
    <PostHeader>
      <img src={heroImageUrl} alt="" />
      <h1>{title}</h1>
    </PostHeader>

    <PostContent>
      <Markdown source={source} renderers={{ code: CodeBlock }} />
    </PostContent>
  </>
);
