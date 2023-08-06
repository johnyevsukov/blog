import styled from "styled-components";
import { HStack } from "../HStack/HStack";
import { colors } from "../../../colors";
import { onDesktop } from "../../utils/onDesktop";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  padding: 0 32px;
  background: ${colors.pureWhite};
`;

export const Content = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;

  ${onDesktop`
    flex-direction: row;
  `}
`;

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
    div {
      background: ${colors.blue1};
    }
  }
`;

export const ArticlePreviewCard = styled(VStack)`
  border-radius: 15px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.offWhite};
  transition: all 0.1s ease-in-out;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
`;
