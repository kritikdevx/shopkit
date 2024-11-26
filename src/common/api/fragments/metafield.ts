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
      ... on Video {
        id
        mediaContentType
        previewImage {
          altText
          height
          id
          url
          width
        }
        sources {
          format
          height
          mimeType
          url
          width
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
            ... on Video {
              id
              mediaContentType
              previewImage {
                altText
                height
                id
                url
                width
              }
              sources {
                format
                height
                mimeType
                url
                width
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
                  ... on Video {
                    id
                    mediaContentType
                    previewImage {
                      altText
                      height
                      id
                      url
                      width
                    }
                    sources {
                      format
                      height
                      mimeType
                      url
                      width
                    }
                  }
                  ... on Product {
                    id
                    handle
                  }
                  ... on ProductVariant {
                    id
                  }
                  ... on Collection {
                    id
                    handle
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
                references(first: 250) {
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
                      ... on Video {
                        id
                        mediaContentType
                        previewImage {
                          altText
                          height
                          id
                          url
                          width
                        }
                        sources {
                          format
                          height
                          mimeType
                          url
                          width
                        }
                      }
                      ... on Product {
                        id
                        handle
                      }
                      ... on ProductVariant {
                        id
                      }
                      ... on Collection {
                        id
                        handle
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
          references(first: 250) {
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
                ... on Video {
                  id
                  mediaContentType
                  previewImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  sources {
                    format
                    height
                    mimeType
                    url
                    width
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
                      ... on Video {
                        id
                        mediaContentType
                        previewImage {
                          altText
                          height
                          id
                          url
                          width
                        }
                        sources {
                          format
                          height
                          mimeType
                          url
                          width
                        }
                      }
                      ... on Product {
                        id
                        handle
                      }
                      ... on ProductVariant {
                        id
                      }
                      ... on Collection {
                        id
                        handle
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
                    references(first: 250) {
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
                          ... on Video {
                            id
                            mediaContentType
                            previewImage {
                              altText
                              height
                              id
                              url
                              width
                            }
                            sources {
                              format
                              height
                              mimeType
                              url
                              width
                            }
                          }
                          ... on Product {
                            id
                            handle
                          }
                          ... on ProductVariant {
                            id
                          }
                          ... on Collection {
                            id
                            handle
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
      }
    }
    references(first: 250) {
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
          ... on Video {
            id
            mediaContentType
            previewImage {
              altText
              height
              id
              url
              width
            }
            sources {
              format
              height
              mimeType
              url
              width
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
                ... on Video {
                  id
                  mediaContentType
                  previewImage {
                    altText
                    height
                    id
                    url
                    width
                  }
                  sources {
                    format
                    height
                    mimeType
                    url
                    width
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
                      ... on Video {
                        id
                        mediaContentType
                        previewImage {
                          altText
                          height
                          id
                          url
                          width
                        }
                        sources {
                          format
                          height
                          mimeType
                          url
                          width
                        }
                      }
                      ... on Product {
                        id
                        handle
                      }
                      ... on ProductVariant {
                        id
                      }
                      ... on Collection {
                        id
                        handle
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
                    references(first: 250) {
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
                          ... on Video {
                            id
                            mediaContentType
                            previewImage {
                              altText
                              height
                              id
                              url
                              width
                            }
                            sources {
                              format
                              height
                              mimeType
                              url
                              width
                            }
                          }
                          ... on Product {
                            id
                            handle
                          }
                          ... on ProductVariant {
                            id
                          }
                          ... on Collection {
                            id
                            handle
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
              references(first: 250) {
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
                    ... on Video {
                      id
                      mediaContentType
                      previewImage {
                        altText
                        height
                        id
                        url
                        width
                      }
                      sources {
                        format
                        height
                        mimeType
                        url
                        width
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
                          ... on Video {
                            id
                            mediaContentType
                            previewImage {
                              altText
                              height
                              id
                              url
                              width
                            }
                            sources {
                              format
                              height
                              mimeType
                              url
                              width
                            }
                          }
                          ... on Product {
                            id
                            handle
                          }
                          ... on ProductVariant {
                            id
                          }
                          ... on Collection {
                            id
                            handle
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
                        references(first: 250) {
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
                              ... on Video {
                                id
                                mediaContentType
                                previewImage {
                                  altText
                                  height
                                  id
                                  url
                                  width
                                }
                                sources {
                                  format
                                  height
                                  mimeType
                                  url
                                  width
                                }
                              }
                              ... on Product {
                                id
                                handle
                              }
                              ... on ProductVariant {
                                id
                              }
                              ... on Collection {
                                id
                                handle
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
