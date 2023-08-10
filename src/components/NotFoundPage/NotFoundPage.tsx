import React from "react";
import { Text } from "../Text/Text";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { SectionContent } from "../SectionContent/SectionContent";

export const NotFoundPage: React.FC = () => {
  return (
    <SectionWrapper $background="pureWhite">
      <SectionContent>
        <Text $size="xxl" $weight="bold" $align="center" as="h1">
          404... Not Found
        </Text>
      </SectionContent>
    </SectionWrapper>
  );
};
