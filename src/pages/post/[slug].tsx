import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { PostDetails } from "@/components/PostDetails/PostDetails";
import { Post } from "@/posts/domain/Post";
import { PostRepository } from "@/posts/repository/PostRepository";

interface PostPageProps {
  post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Antoine Chalifour</title>
      </Head>

      <PostDetails
        title={post.title}
        source={post.body}
        heroImageUrl={post.heroImage.url}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const repository = PostRepository.create(
    process.env.CONTENTFUL_SPACE_ID!,
    process.env.CONTENTFUL_ACCESS_TOKEN!
  );

  const posts = await repository.fetchAllPreviews();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostPageProps,
  { slug: string }
> = async ({ params }) => {
  const repository = PostRepository.create(
    process.env.CONTENTFUL_SPACE_ID!,
    process.env.CONTENTFUL_ACCESS_TOKEN!
  );
  const post = await repository.fetchBySlug(params!.slug);

  return {
    props: { post },
  };
};

export default PostPage;
