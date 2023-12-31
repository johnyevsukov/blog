import styled from "styled-components";

export const VStack = styled.div<{
  $spacing: number;
  $width?: string;
  $padding?: string;
  $alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => ($width ? $width : "100%")};
  padding: ${({ $padding }) => ($padding ? $padding : 0)};
  align-items: ${({ $alignItems }) =>
    $alignItems ? $alignItems : "flex-start"};

  > * {
    margin-bottom: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
