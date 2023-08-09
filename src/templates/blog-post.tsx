import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Layout } from "../components/Layout/Layout";
import { Text } from "../components/Text/Text";
import { HStack } from "../components/HStack/HStack";
import { VStack } from "../components/VStack/VStack";
import * as styles from "./styles";

export default function BlogPostTemplate({ data }: any) {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
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
                <GatsbyImage image={post.image?.gatsbyImage} alt="" />
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
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
    }
  }
`;
