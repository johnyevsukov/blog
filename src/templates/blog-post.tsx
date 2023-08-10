import React from "react";
import SEO from "../components/SEO/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Layout } from "../components/Layout/Layout";
import { Text } from "../components/Text/Text";
import { HStack } from "../components/HStack/HStack";
import { VStack } from "../components/VStack/VStack";
import { BlogPostType } from "../../types";
import * as styles from "./styles";

interface BlogPostTemplateProps {
  data: { contentfulBlogPost: BlogPostType };
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description.description}
        imageUrl={post.image.gatsbyImage.images.fallback?.src}
        article
      />
      <styles.Wrapper>
        <styles.Content>
          <VStack $spacing={32}>
            <VStack $spacing={24}>
              <HStack
                $spacing={16}
                $justifyContent="space-between"
                $alignItems="flex-end"
                $wrap
              >
                <Text $weight="bold" $size="xl" as="h1">
                  {post.title}
                </Text>
                <Text $weight="medium" $color="gray1">
                  {post.publishedDate}
                </Text>
              </HStack>
              <styles.ImageWrapper>
                <GatsbyImage
                  image={post.image?.gatsbyImage}
                  alt={post.image.title}
                />
              </styles.ImageWrapper>
            </VStack>
            <styles.BodyWrapper>
              {post.body?.raw && renderRichText(post.body)}
            </styles.BodyWrapper>
          </VStack>
        </styles.Content>
      </styles.Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      description {
        id
        description
      }
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        id
        title
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 750)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
      slug
    }
  }
`;

export default BlogPostTemplate;
