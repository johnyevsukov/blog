import React from "react";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { WebIcon } from "../Icons/WebIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import * as styles from "./styles";

export const Nav: React.FC = () => {
  return (
    <styles.Nav>
      <styles.NavList>
        <styles.LeftContent>
          <styles.NavListItem>
            <styles.LeftLink to="/">John</styles.LeftLink>
          </styles.NavListItem>
        </styles.LeftContent>
        <styles.RightContent>
          <styles.NavListItem>
            <styles.IconLink
              href="https://www.john.engineering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebIcon />
            </styles.IconLink>
          </styles.NavListItem>
          <styles.NavListItem>
            <styles.IconLink
              href="https://www.linkedin.com/in/john-yevsukov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </styles.IconLink>
          </styles.NavListItem>
          <styles.NavListItem>
            <styles.IconLink
              href="https://github.com/johnyevsukov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </styles.IconLink>
          </styles.NavListItem>
        </styles.RightContent>
      </styles.NavList>
    </styles.Nav>
  );
};
