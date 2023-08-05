import React from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <>nav</>
      <main>{children}</main>
      <>footer</>
    </>
  );
};
