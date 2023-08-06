import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import { HomePageHeader } from "../HomePageHeader/HomeHeader";
import { HomePageArticlePreviews } from "../HomePageArticlePreviews/HomePageArticlePreviews";

interface HomePageProps {
  pageData: any;
  articleData: any[];
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
