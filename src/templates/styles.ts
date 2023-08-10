import styled from "styled-components";
import { colors } from "../../colors";
import { fontSizeCss, fontWeights } from "../components/Text/Text";
import { onDesktop } from "../utils/onDesktop";

export const Wrapper = styled.article`
  padding: 0 16px;
  background: ${colors.pureWhite};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  max-width: 750px;
  margin: 0 auto;

  ${onDesktop`
    padding: 64px 0;
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
  max-height: 340px;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const BodyWrapper = styled.div`
  /* h1 should always live outside of article body via article.title */

  h2 {
    font-weight: ${fontWeights.bold};
    ${fontSizeCss.xl}
    margin: 16px 0 12px;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fontWeights.bold};
    ${fontSizeCss.md}
  }

  p {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }

  a {
    color: ${colors.blue4};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
