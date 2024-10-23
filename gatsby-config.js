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
        path: `C:/Users/lfros/my_gatsby_site/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName:  "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "Drupal",
        // Url to query from
        // url: "http://kecatalog.dev.wwbtc.com/graphql",
        //  url: `http://10.89.0.11/graphql`,
        //url: `https://api.keeneland.com/graphql`,
        // url: "http://10.89.0.24/graphql",
        url: "https://csc496f24demo.tldr.dev/graphql",
      },
    },
  ],
};
