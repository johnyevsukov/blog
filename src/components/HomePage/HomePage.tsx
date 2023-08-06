import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import * as styles from "./styles";

interface HomePageProps {
  data: any;
}

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <styles.Wrapper>
      <styles.ContentHStack $spacing={32}>
        <styles.ImageWrapper>
          <GatsbyImage image={data.image?.gatsbyImage} alt="" />
        </styles.ImageWrapper>
        <styles.TextWrapper>
          <VStack $spacing={12}>
            <Text $weight="bold" $size="xxl" as="h1">
              {data.title}
            </Text>
            <Text $weight="medium" $color="gray2">
              {data.description.description}
            </Text>
          </VStack>
        </styles.TextWrapper>
      </styles.ContentHStack>
    </styles.Wrapper>
  );
};
