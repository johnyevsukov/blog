import { Link } from "gatsby";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LeftContent = styled.div`
  margin-right: 8px;
`;

export const RightContent = styled.div`
  display: flex;

  > li {
    margin-right: 8px;
  }

  li:last-child {
    margin-right: 0;
  }
`;

export const NavListItem = styled.li``;

export const LeftLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #333333;
  transition: all 0.1s ease-in-out;

  &:hover,
  :focus {
    text-decoration: underline;
  }
`;

export const IconLink = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
