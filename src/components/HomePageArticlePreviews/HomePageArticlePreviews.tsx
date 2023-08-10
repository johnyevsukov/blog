import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { SectionContent } from "../SectionContent/SectionContent";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import { BlogPostType } from "../../../types";
import * as styles from "./styles";

interface HomePageArticlePreviewsProps {
  articles: BlogPostType[];
}

export const HomePageArticlePreviews: React.FC<
  HomePageArticlePreviewsProps
> = ({ articles }) => {
  return (
    <SectionWrapper $background="offWhite">
      <SectionContent>
        <VStack $spacing={32} $alignItems="center" $width="100%">
          <Text $weight="bold" $size="xl" as="h2">
            Articles
          </Text>
          <styles.ArticleLinksWrapper>
            {articles.map((article) => {
              return (
                <styles.ArticlePreviewLink
                  to={article.slug}
                  key={article.title}
                >
                  <styles.ArticlePreviewCard $spacing={12}>
                    <styles.ImageWrapper>
                      <GatsbyImage
                        image={article.image.gatsbyImage}
                        alt={article.image.title}
                      />
                    </styles.ImageWrapper>
                    <VStack $spacing={8}>
                      <Text $weight="bold">{article.title}</Text>
                      <Text $size="sm" $color="gray2">
                        {article.description.description}
                      </Text>
                    </VStack>
                  </styles.ArticlePreviewCard>
                </styles.ArticlePreviewLink>
              );
            })}
          </styles.ArticleLinksWrapper>
        </VStack>
      </SectionContent>
    </SectionWrapper>
  );
};
