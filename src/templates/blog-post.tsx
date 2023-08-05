import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql } from "gatsby";

export default function BlogPostTemplate({ data }: any) {
  const post = data.contentfulBlogPost;
  return (
    <div>
      <p>{post.title}</p>
      <div>{post.body?.raw && renderRichText(post.body)}</div>
    </div>
  );
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      body {
        raw
      }
    }
  }
`;
