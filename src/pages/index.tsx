import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Hi, I'm John!</h1>
      <p>Welcome to my blog.</p>
    </Layout>
  );
};

export default HomePage;
