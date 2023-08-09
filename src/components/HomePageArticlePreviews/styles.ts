import styled from "styled-components";
import { VStack } from "../VStack/VStack";
import { Link } from "gatsby";
import { colors } from "../../../colors";
import { onDesktop } from "../../utils/onDesktop";

export const ArticleLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  ${onDesktop`
      grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export const ArticlePreviewLink = styled(Link)`
  text-decoration: none;
  display: contents;

  &:hover,
  &:focus {
    div:first-child {
      box-shadow: rgba(0, 0, 0, 0.2) 3.95px 3.95px 10px;
      background: rgba(194, 230, 255, 0.08);
    }
  }
`;

export const ArticlePreviewCard = styled(VStack)`
  border-radius: 15px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
`;
