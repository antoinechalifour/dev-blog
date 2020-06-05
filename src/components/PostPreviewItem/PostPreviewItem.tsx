import formatDate from "date-fns/format";
import Link from "next/link";
import React from "react";

import { TagList } from "@/components/Tags/Tags";
import { PostPreview } from "@/posts/domain/PostPreview";
import { VStack } from "@/ui/VStack";

import { PostPreviewLayout, PostInfo } from "./styles";

interface PostPreviewItemProps {
  postPreview: PostPreview;
}

export const PostPreviewItem: React.FC<PostPreviewItemProps> = ({
  postPreview,
}) => (
  <PostPreviewLayout>
    <VStack>
      <Link href="/post/[slug]" as={`/post/${postPreview.slug}`}>
        <a>
          <h2>{postPreview.title} </h2>
        </a>
      </Link>

      <PostInfo>
        <p>
          Publié le{" "}
          {formatDate(new Date(postPreview.publishDate), "dd/MM/yyyy")}
        </p>

        <span>•</span>

        <p>Temps de lecture: {postPreview.readingTimeInMinutes}mn</p>
      </PostInfo>

      <p>{postPreview.description}</p>

      <TagList tags={postPreview.tags} />
    </VStack>
  </PostPreviewLayout>
);
