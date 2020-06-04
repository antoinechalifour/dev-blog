import React from "react";

import { AuthorLayout } from "@/components/AuthorDetails/styles";

interface AuthorDetailsProps {
  name: string;
  github: string;
  twitter: string;
  imageUrl: string;
}

export const AuthorDetails: React.FC<AuthorDetailsProps> = ({
  name,
  github,
  twitter,
  imageUrl,
}) => (
  <AuthorLayout>
    <img src={imageUrl} alt={name} />
    <h1>{name}</h1>

    <dl>
      <dt>Github</dt>
      <dd>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
        >
          {github}
        </a>
      </dd>

      <dt>Twitter</dt>
      <dd>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          @{twitter}
        </a>
      </dd>
    </dl>
  </AuthorLayout>
);
