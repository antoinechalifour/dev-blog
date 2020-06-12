import Link from "next/link";
import React from "react";

import { DarkModeSwitch } from "@/components/DarkModeSwitch/DarkModeSwitch";
import { HeaderLayout } from "@/components/Header/styles";

export const Header: React.FC = () => (
  <HeaderLayout>
    <nav>
      <Link href="/">
        <a>
          <img src="/code_dark.svg" alt="Code" />
        </a>
      </Link>
      <p>Antoine Chalifour</p>

      {process.browser && <DarkModeSwitch />}
    </nav>
  </HeaderLayout>
);
