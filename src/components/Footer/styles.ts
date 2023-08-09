import styled from "styled-components";
import { colors } from "../../../colors";

export const Footer = styled.footer`
  padding: 32px;
  background: ${colors.textBlack};
`;

export const IconLink = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  background: ${colors.pureWhite};
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgb(0, 0, 0, 0.25) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
