const pageFragment = /* GraphQL */ `
  fragment page on Page {
    body
    bodySummary
    createdAt
    handle
    id
    onlineStoreUrl
    title
    trackingParameters
    updatedAt
    seo {
      ...seo
    }
  }
`;

export default pageFragment;
