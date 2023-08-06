import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import * as styles from "./styles";

interface HomePageHeaderProps {
  title: string;
  description: string;
  image: any;
}

export const HomePageHeader: React.FC<HomePageHeaderProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <styles.Wrapper>
      <styles.Content>
        <styles.ImageWrapper>
          <GatsbyImage image={image.gatsbyImage} alt={image.title} />
        </styles.ImageWrapper>
        <styles.TextWrapper $spacing={12}>
          <styles.Title>{title}</styles.Title>
          <styles.Subtext $weight="medium" $color="gray2">
            {description}
          </styles.Subtext>
        </styles.TextWrapper>
      </styles.Content>
    </styles.Wrapper>
  );
};
