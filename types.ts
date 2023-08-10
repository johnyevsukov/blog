import type { IGatsbyImageData } from "gatsby-plugin-image";

export type BlogPostType = {
  id: string;
  title: string;
  description: {
    description: string;
    id: string;
  };
  image: {
    id: string;
    title: string;
    gatsbyImage: IGatsbyImageData;
  };
  slug: string;
  publishedDate: string;
  body: {
    raw: string;
  };
};

export type PageType = {
  id: string;
  title: string;
  description: {
    id: string;
    description: string;
  };
  image: {
    id: string;
    title: string;
    gatsbyImage: IGatsbyImageData;
  };
};
