// src/pages/{contentfulPage.url}.tsx

import React from "react";
import { graphql } from "gatsby";

const Page: React.FC = ({ data }: any) => {
  return (
    <main>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.description.description}</p>
      <img src={data.contentfulPage.image.file.url} />
    </main>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default Page;
