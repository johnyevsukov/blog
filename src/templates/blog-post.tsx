import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function BlogPostTemplate() {
  return <div></div>;
}

// export default function BlogPostTemplate({ data }: any) {
//   const post = data.contentfulBlogPost;
//   return (
//     <div>
//       <GatsbyImage image={post.image?.gatsbyImage} alt="" />
//       <p>{post.title}</p>
//       <p>{post.publishedDate}</p>
//       <div>{post.body?.raw && renderRichText(post.body)}</div>
//     </div>
//   );
// }

// export const query = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       slug
//       title
//       publishedDate(formatString: "MMMM Do, YYYY")
//       image {
//         gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
//         resize(height: 630, width: 1200) {
//           src
//         }
//       }
//       body {
//         raw
//       }
//     }
//   }
// `;
