const metafieldFragment = /* GraphQL */ `
  fragment metafield on Metafield {
    createdAt
    description
    id
    key
    namespace
    type
    updatedAt
    value
    reference {
      ... on MediaImage {
        image {
          url
          altText
          width
          height
          src
        }
      }
      ... on Product {
        ...product
      }
      ... on ProductVariant {
        ...productVariant
      }
      ... on Collection {
        ...collection
      }
      ... on Metaobject {
        id
        handle
        type
        updatedAt
        fields {
          key
          type
          value
          reference {
            ... on MediaImage {
              image {
                url
                altText
                width
                height
                src
              }
            }
            ... on Product {
              ...product
            }
            ... on ProductVariant {
              ...productVariant
            }
            ... on Collection {
              ...collection
            }
            ... on Metaobject {
              id
              handle
              type
              updatedAt
              fields {
                key
                type
                value
              }
            }
          }
          references(first: 10) {
            edges {
              node {
                ... on MediaImage {
                  image {
                    url
                    altText
                    width
                    height
                    src
                  }
                }
                ... on Product {
                  ...product
                }
                ... on ProductVariant {
                  ...productVariant
                }
                ... on Collection {
                  ...collection
                }
                ... on Metaobject {
                  id
                  handle
                  type
                  updatedAt
                  fields {
                    key
                    type
                    value
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    }
    references(first: 10) {
      edges {
        node {
          ... on MediaImage {
            image {
              url
              altText
              width
              height
              src
            }
          }
          ... on Product {
            ...product
          }
          ... on ProductVariant {
            ...productVariant
          }
          ... on Collection {
            ...collection
          }
          ... on Metaobject {
            id
            handle
            type
            updatedAt
            fields {
              key
              type
              value
              reference {
                ... on MediaImage {
                  image {
                    url
                    altText
                    width
                    height
                    src
                  }
                }
                ... on Product {
                  ...product
                }
                ... on ProductVariant {
                  ...productVariant
                }
                ... on Collection {
                  ...collection
                }
                ... on Metaobject {
                  id
                  handle
                  type
                  updatedAt
                  fields {
                    key
                    type
                    value
                  }
                }
              }
              references(first: 10) {
                edges {
                  node {
                    ... on MediaImage {
                      image {
                        url
                        altText
                        width
                        height
                        src
                      }
                    }
                    ... on Product {
                      ...product
                    }
                    ... on ProductVariant {
                      ...productVariant
                    }
                    ... on Collection {
                      ...collection
                    }
                    ... on Metaobject {
                      id
                      handle
                      type
                      updatedAt
                      fields {
                        key
                        type
                        value
                      }
                    }
                  }
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export default metafieldFragment;
