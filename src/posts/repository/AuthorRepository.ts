import { ContentfulClientApi, createClient } from "contentful";

import { Author } from "@/posts/domain/Author";
import { ContentfulAuthor } from "@/posts/repository/ContentfulAuthor";
import { toAuthor } from "@/posts/repository/mappers";

export class AuthorRepository {
  protected constructor(private client: ContentfulClientApi) {}

  static create(host: string, spaceId: string, accessToken: string) {
    const client = createClient({
      host,
      space: spaceId,
      accessToken,
    });

    return new AuthorRepository(client);
  }

  async fetchAuthor(): Promise<Author> {
    const response = await this.client.getEntries<ContentfulAuthor>({
      content_type: "person",
    });

    return toAuthor(response.items[0].fields);
  }
}
