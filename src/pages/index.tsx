import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { AuthorDetails } from "@/components/AuthorDetails/AuthorDetails";
import { PostPreviewList } from "@/components/PostPreviewList/PostPreviewList";
import { Author } from "@/posts/domain/Author";
import { PostPreview } from "@/posts/domain/PostPreview";
import { AuthorRepository } from "@/posts/repository/AuthorRepository";
import { PostRepository } from "@/posts/repository/PostRepository";

interface HomePageProps {
  postPreviews: PostPreview[];
  author: Author;
}

const HomePage: React.FC<HomePageProps> = ({ postPreviews, author }) => (
  <>
    <Head>
      <title>Antoine Chalifour | Blog</title>
    </Head>

    <AuthorDetails
      name={author.name}
      github={author.github}
      twitter={author.twitter}
      imageUrl={author.image.url}
    />

    <PostPreviewList postPreviews={postPreviews} />
  </>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const postRepository = PostRepository.create(
    process.env.CONTENTFUL_SPACE_ID!,
    process.env.CONTENTFUL_ACCESS_TOKEN!
  );
  const authorRepository = AuthorRepository.create(
    process.env.CONTENTFUL_SPACE_ID!,
    process.env.CONTENTFUL_ACCESS_TOKEN!
  );
  const [postPreviews, author] = await Promise.all([
    postRepository.fetchAllPreviews(),
    authorRepository.fetchAuthor(),
  ]);

  return {
    props: { postPreviews, author },
  };
};

export default HomePage;
