import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../components/HomePage/HomePage";

const Home: React.FC = ({ data }: any) => {
  console.log("data: ", data);
  const { contentfulPage: pageData } = data;
  const { allContentfulBlogPost: articleData } = data;
  console.log("article ", articleData.nodes);

  return (
    <Layout>
      <HomePage pageData={pageData} articleData={articleData.nodes} />
    </Layout>
  );
};

export default Home;

export const data = graphql`
  query pageQuery {
    contentfulPage(id: { eq: "d1a3524e-76e0-5e7b-ae3a-2fe7335ec5d0" }) {
      title
      description {
        id
        description
      }
      image {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 500)
        resize(height: 500, width: 500) {
          src
        }
      }
    }
    allContentfulBlogPost(sort: { publishedDate: DESC }) {
      nodes {
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
        image {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          id
          description
        }
      }
    }
  }
`;
