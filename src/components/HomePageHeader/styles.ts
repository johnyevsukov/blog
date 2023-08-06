import styled from "styled-components";
import { HStack } from "../HStack/HStack";
import { colors } from "../../../colors";
import { onDesktop } from "../../utils/onDesktop";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";

export const Wrapper = styled.div`
  padding: 0 32px;
  background: ${colors.offWhite};
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

export const TextWrapper = styled(VStack).attrs({
  $alignItems: "center",
})`
  max-width: 500px;
  margin-top: 32px;

  ${onDesktop`
    margin-top: 0;
    align-items: flex-start;
  `}
`;

export const ImageWrapper = styled.div`
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  ${onDesktop`
    margin-right: 32px;
  `}
`;

export const Title = styled(Text).attrs({
  $align: "center",
  $weight: "bold",
  $size: "xxl",
  as: "h1",
})`
  ${onDesktop`
    text-align: left;
  `}
`;

export const Subtext = styled(Text).attrs({
  $align: "center",
  $weight: "medium",
  $color: "gray2",
})`
  ${onDesktop`
    text-align: left;
  `}
`;
