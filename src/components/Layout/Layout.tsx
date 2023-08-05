import React from "react";
import { Nav } from "../Nav/Nav";
import "./layout.css";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <>footer</>
    </>
  );
};
