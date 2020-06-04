import React from "react";

import { PostPreviewItem } from "@/components/PostPreviewItem/PostPreviewItem";
import { Container } from "@/components/PostPreviewList/styles";
import { PostPreview } from "@/posts/domain/PostPreview";
import { VStack } from "@/ui/VStack";

interface PostPreviewListProps {
  postPreviews: PostPreview[];
}

export const PostPreviewList: React.FC<PostPreviewListProps> = ({
  postPreviews,
}) => (
  <Container>
    <VStack as="ul" spacing={5}>
      {postPreviews.map((postPreview) => (
        <li key={postPreview.slug}>
          <PostPreviewItem postPreview={postPreview} />
        </li>
      ))}
    </VStack>
  </Container>
);
