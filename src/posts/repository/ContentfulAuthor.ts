import { Entry as ContentfulEntry } from "contentful";
import { ContentfulImage } from "@/posts/repository/ContentfulImage";

export interface ContentfulAuthor {
  name: string;
  twitter: string;
  github: string;
  image: ContentfulEntry<ContentfulImage>;
}
