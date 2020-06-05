import { Author } from "@/posts/domain/Author";

export interface PostPreview {
  title: string;
  slug: string;
  description: string;
  author: Author;
  publishDate: string;
  tags: string[];
  readingTimeInMinutes: number;
}
