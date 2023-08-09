import React from "react";
import { HomePageHeader } from "../HomePageHeader/HomeHeader";
import { HomePageArticlePreviews } from "../HomePageArticlePreviews/HomePageArticlePreviews";
import { BlogPostType, PageType } from "../../../types";

interface HomePageProps {
  pageData: PageType;
  articleData: BlogPostType[];
}

export const HomePage: React.FC<HomePageProps> = ({
  pageData,
  articleData,
}) => {
  return (
    <>
      <HomePageHeader
        title={pageData.title}
        description={pageData.description.description}
        image={pageData.image}
      />
      <HomePageArticlePreviews articles={articleData} />
    </>
  );
};
