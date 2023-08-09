import styled from "styled-components";
import { colorType, colors } from "../../../colors";
import { onDesktop } from "../../utils/onDesktop";

export const SectionWrapper = styled.section<{ $background: colorType }>`
  padding: 0 16px;
  background: ${({ $background }) => colors[$background]};

  ${onDesktop`
    padding: 0 32px;
  `}
`;
