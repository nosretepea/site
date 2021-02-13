module.exports = {
  siteMetadata: {
    defaultTitle: `Ashley Peterson`,
    defaultDescription: `Ashley Peterson's personal website`,
    defaultImage: `/flower.jpg`,
    siteUrl: `https://www.ashleyp.io`,
    author: `@nosretepea`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ovo\:300,400,900`,
          `Open Sans\:300,300i,400,400i`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js")
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.ashleyp.io",
        protocol: "https",
        hostname: "www.ashleyp.io",
      },
    }
  ],
}