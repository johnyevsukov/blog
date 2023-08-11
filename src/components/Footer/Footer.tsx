import React from "react";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import { HStack } from "../HStack/HStack";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { WebIcon } from "../Icons/WebIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import * as styles from "./styles";

export const Footer: React.FC = () => {
  return (
    <styles.Footer>
      <VStack $spacing={12} $alignItems="center">
        <HStack $spacing={8} $width="auto">
          <styles.IconLink
            href="https://www.john.engineering/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebIcon />
          </styles.IconLink>
          <styles.IconLink
            href="https://www.linkedin.com/in/john-yevsukov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </styles.IconLink>
          <styles.IconLink
            href="https://github.com/johnyevsukov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </styles.IconLink>
        </HStack>
        <Text $weight="medium" $size="sm" $align="center" $color={"pureWhite"}>
          © Copyright <strong>John Yevsukov 2023.</strong> All Rights Reserved.
        </Text>
      </VStack>
    </styles.Footer>
  );
};
