import React from "react";
import SEO from "../components/SEO/SEO";
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
      <SEO />
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
      id
      title
      description {
        id
        description
      }
      image {
        title
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 500)
        resize(height: 500, width: 500) {
          src
        }
      }
    }
    allContentfulBlogPost(sort: { publishedDate: DESC }) {
      nodes {
        id
        title
        description {
          id
          description
        }
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
        image {
          id
          title
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
