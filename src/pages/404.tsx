import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <NotFoundPage />
    </Layout>
  );
};

export default NotFound;
