import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { SectionContent } from "../SectionContent/SectionContent";
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
    <SectionWrapper $background="pureWhite">
      <SectionContent>
        <styles.ImageWrapper>
          <GatsbyImage image={image.gatsbyImage} alt={image.title} />
        </styles.ImageWrapper>
        <styles.TextWrapper $spacing={12}>
          <styles.Title>{title}</styles.Title>
          <styles.Subtext $weight="medium" $color="gray2">
            {description}
          </styles.Subtext>
        </styles.TextWrapper>
      </SectionContent>
    </SectionWrapper>
  );
};
