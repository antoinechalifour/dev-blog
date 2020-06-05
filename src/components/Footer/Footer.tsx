import React from "react";

import { HStack } from "@/ui/HStack";

import { FooterLayout } from "./styles";

export const Footer: React.FC<FooterProps> = () => (
  <FooterLayout>
    <HStack as="ul">
      <li>
        <a
          href="https://twitter.com/Antoine_Chlfr"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </li>

      <li>
        <a
          href="https://github.com/antoinechalifour"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/antoinechalifour/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </li>
    </HStack>
  </FooterLayout>
);
