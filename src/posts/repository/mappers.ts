import readingTime from "reading-time";

import { Author } from "@/posts/domain/Author";
import { Media } from "@/posts/domain/Media";
import { Post } from "@/posts/domain/Post";
import { PostPreview } from "@/posts/domain/PostPreview";
import { ContentfulAuthor } from "@/posts/repository/ContentfulAuthor";
import { ContentfulImage } from "@/posts/repository/ContentfulImage";
import { ContentfulPost } from "@/posts/repository/ContentfulPost";

const getReadingTime = (body: string) => {
  const stats = readingTime(body);

  return Math.round(stats.minutes);
};

export function toAuthor(contentfulAuthor: ContentfulAuthor): Author {
  return {
    name: contentfulAuthor.name,
    github: contentfulAuthor.github,
    image: toMedia(contentfulAuthor.image.fields),
    twitter: contentfulAuthor.twitter,
  };
}

export function toMedia(contentfulImage: ContentfulImage): Media {
  return {
    url: contentfulImage.file.url,
  };
}

export function toPost(contentfulPost: ContentfulPost): Post {
  return {
    slug: contentfulPost.slug,
    title: contentfulPost.title,
    author: toAuthor(contentfulPost.author.fields),
    body: contentfulPost.body,
    description: contentfulPost.description,
    heroImage: toMedia(contentfulPost.heroImage.fields),
    publishDate: contentfulPost.publishDate,
    tags: contentfulPost.tags,
    readingTimeInMinutes: getReadingTime(contentfulPost.body),
  };
}

export function toPostPreview(contentfulPost: ContentfulPost): PostPreview {
  return {
    slug: contentfulPost.slug,
    title: contentfulPost.title,
    description: contentfulPost.description,
    author: toAuthor(contentfulPost.author.fields),
    publishDate: contentfulPost.publishDate,
    tags: contentfulPost.tags,
    readingTimeInMinutes: getReadingTime(contentfulPost.body),
  };
}
