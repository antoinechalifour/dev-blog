import React from "react";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import { Layout } from "./styles";

export const PageLayout: React.FC = ({ children }) => (
  <Layout>
    <Header />

    <main>{children}</main>

    <Footer />
  </Layout>
);
