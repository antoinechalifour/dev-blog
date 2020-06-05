import React from "react";
import stc from "string-to-color";

import { Tag } from "@/components/Tags/styles";
import { HStack } from "@/ui/HStack";

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => (
  <HStack as="ul">
    {tags.map((tag) => (
      <li key={tag}>
        <Tag backgroundColor={stc(tag)}>{tag}</Tag>
      </li>
    ))}
  </HStack>
);
