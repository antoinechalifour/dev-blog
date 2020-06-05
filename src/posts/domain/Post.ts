import { Author } from "./Author";
import { Media } from "./Media";

export interface Post {
  title: string;
  slug: string;
  heroImage: Media;
  description: string;
  body: string;
  author: Author;
  publishDate: string;
  tags: string[];
  readingTimeInMinutes: number;
}
