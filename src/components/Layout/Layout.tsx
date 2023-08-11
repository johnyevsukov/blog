import React from "react";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
