module.exports = {
  siteMetadata: {
    title: "Larry's Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem", 
      options: {
        name: `blog`,
        path: `C:/Users/lfros/my_gatsby_site/blog`,
      },
    },
    "gatsby-plugin-mdx",
{
  resolve: "gatsby-source-graphql",
    options: {
      // This type will contain remote schema Query type
      typeName:  "DrupalGraphQL", // Fixed an additional typo
      // This is field under which it's accessible
      fieldName: "Drupal",
      // Url to query from
        url: "https://csc496f24demo.tldr.dev/graphql",
      },
    },
  ],
};
