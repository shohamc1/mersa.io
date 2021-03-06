module.exports = {
  siteMetadata: {
    siteUrl: "https://www.mersa.io",
    title: "mersa.io",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-213333879-1"],
      },
      pluginConfig: {
        respectDNT: true,
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "mersa.io",
        short_name: "mersa.io",
        start_url: "/",
        display: "standalone",
        icon: "./src/images/mersa_icon.webp",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
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
