import styled from "styled-components";
import { onDesktop } from "../../utils/onDesktop";

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  max-width: 1300px;
  margin: 0 auto;

  ${onDesktop`
    flex-direction: row;
    padding: 64px 0;
  `}
`;
