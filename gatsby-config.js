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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Ovo",
            weights: ["300", "400", "900"]
          },
          {
            family: "Open Sans",
            weights: ["300", "300i", "400", "400i"]
          }
        ]
      }
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
        region: "us-east-2",
        protocol: "https",
        hostname: "www.ashleyp.io",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://www.ashleyp.io",
      },
    }
  ],
}