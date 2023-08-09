export type BlogPostType = {
  title: string;
  description: {
    description: string;
    id: string;
  };
  image: any;
  slug: string;
  publishedDate: string;
};

export type PageType = {
  title: string;
  description: {
    id: string;
    description: string;
  };
  image: any;
};
