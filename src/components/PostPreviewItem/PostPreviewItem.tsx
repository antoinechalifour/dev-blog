import formatDate from "date-fns/format";
import Link from "next/link";
import React from "react";

import { TagList } from "@/components/Tags/Tags";
import { PostPreview } from "@/posts/domain/PostPreview";
import { VStack } from "@/ui/VStack";

import { PostPreviewLayout, PublicationDate } from "./styles";

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

      <PublicationDate>
        Publié le {formatDate(new Date(postPreview.publishDate), "dd/MM/yyyy")}
      </PublicationDate>

      <p>{postPreview.description}</p>

      <TagList tags={postPreview.tags} />
    </VStack>
  </PostPreviewLayout>
);
