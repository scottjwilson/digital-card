require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "digital-card",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS,
        spaceId: process.env.CONTENTFUL_SPACE,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_PROPERTY,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
