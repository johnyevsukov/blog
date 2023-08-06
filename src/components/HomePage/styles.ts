import styled from "styled-components";
import { HStack } from "../HStack/HStack";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  padding: 0 32px;
  background: ${colors.offWhite};
`;

export const ContentHStack = styled(HStack)`
  padding: 32px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const ImageWrapper = styled.div`
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
