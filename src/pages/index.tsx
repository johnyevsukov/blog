import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../components/HomePage/HomePage";
import { BlogPostType } from "../../types";
import { PageType } from "../../types";

interface HomeProps {
  data: {
    allContentfulBlogPost: {
      nodes: BlogPostType[];
    };
    contentfulPage: PageType;
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <HomePage
        pageData={data.contentfulPage}
        articleData={data.allContentfulBlogPost.nodes}
      />
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
        id
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 500)
        resize(height: 500, width: 500) {
          src
        }
      }
    }
    allContentfulBlogPost(sort: { publishedDate: DESC }) {
      nodes {
        title
        description {
          id
          description
        }
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
      }
    }
  }
`;
