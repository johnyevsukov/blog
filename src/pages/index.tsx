import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Title</h1>
      <p>subtitle</p>
    </Layout>
  );
};

export default HomePage;
