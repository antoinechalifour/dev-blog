import { Entry as ContentfulEntry } from "contentful";

import { ContentfulAuthor } from "@/posts/repository/ContentfulAuthor";

export interface ContentfulPost {
  title: string;
  slug: string;
  heroImage: any;
  description: string;
  body: string;
  author: ContentfulEntry<ContentfulAuthor>;
  publishDate: string;
  tags: string[];
}
