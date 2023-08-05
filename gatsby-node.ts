const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions;

  const blogPost = path.resolve("./src/templates/blog-post.tsx");

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlogPost.nodes;

  if (posts.length > 0) {
    posts.forEach((post: any, index: any) => {
      createPage({
        path: `/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }
};
