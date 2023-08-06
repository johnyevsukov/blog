import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import * as styles from "./styles";
import { HStack } from "../HStack/HStack";

interface HomePageArticlePreviewsProps {
  articles: any[];
}

export const HomePageArticlePreviews: React.FC<
  HomePageArticlePreviewsProps
> = ({ articles }) => {
  console.log("articles: ", articles);
  return (
    <styles.Wrapper>
      <styles.Content>
        <VStack $spacing={32} $alignItems="center" $width="100%">
          <Text $weight="bold" $size="xl" as="h1">
            Articles
          </Text>
          <styles.ArticleLinksWrapper>
            {articles.map((article) => {
              return (
                <styles.ArticlePreviewLink
                  to={article.slug}
                  key={article.title}
                >
                  <styles.ArticlePreviewCard $spacing={16}>
                    <Text $weight="medium">{article.title}</Text>
                    <styles.ImageWrapper>
                      <GatsbyImage
                        image={article.image.gatsbyImage}
                        alt={article.image.title}
                      />
                    </styles.ImageWrapper>
                    <Text $size="sm" $color="gray2" $align="center">
                      {article.description.description}
                    </Text>
                  </styles.ArticlePreviewCard>
                </styles.ArticlePreviewLink>
              );
            })}
          </styles.ArticleLinksWrapper>
        </VStack>
      </styles.Content>
    </styles.Wrapper>
  );
};
