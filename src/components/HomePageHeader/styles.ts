import styled from "styled-components";
import { Text } from "../Text/Text";
import { VStack } from "../VStack/VStack";
import { onDesktop } from "../../utils/onDesktop";

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
