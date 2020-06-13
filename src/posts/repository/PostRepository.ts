import { ContentfulClientApi, createClient } from "contentful";

import { Post } from "@/posts/domain/Post";
import { PostPreview } from "@/posts/domain/PostPreview";

import { ContentfulPost } from "./ContentfulPost";
import { toPost, toPostPreview } from "./mappers";

export class PostRepository {
  protected constructor(private client: ContentfulClientApi) {}

  static create(host: string, spaceId: string, accessToken: string) {
    const client = createClient({
      host,
      space: spaceId,
      accessToken,
    });

    return new PostRepository(client);
  }

  async fetchAllPreviews(): Promise<PostPreview[]> {
    const response = await this.client.getEntries<ContentfulPost>({
      content_type: "blogPost",
      order: "-fields.publishDate",
    });

    return response.items.map((entry) => toPostPreview(entry.fields));
  }

  async fetchBySlug(slug: string): Promise<Post> {
    const response = await this.client.getEntries<ContentfulPost>({
      content_type: "blogPost",
      "fields.slug[in]": slug,
    });

    return toPost(response.items[0].fields);
  }
}
