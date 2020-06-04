import Link from "next/link";
import React from "react";
import { HeaderLayout } from "@/components/Header/styles";

export const Header: React.FC = () => (
  <HeaderLayout>
    <nav>
      <Link href="/">
        <a>
          <img src="/code.svg" alt="Code" />
        </a>
      </Link>
      <p>Antoine Chalifour</p>
    </nav>
  </HeaderLayout>
);
