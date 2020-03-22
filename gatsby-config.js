module.exports = {
  siteMetadata: {
    title: `Dev Blog - Nicole Anne Lopez`,
    description: `This is the portfolio site of Nicole Lopez, a  full-stack web developer and freelancer`,
    author: `@NicaNixNicaNix`,
    url: "https://www.nicoleannelopez.com", // No trailing slash allowed!
    twitterUsername: "@NicaNixNicaNix",
    mainPages: [
      {
        name: 'Home',
        link: '/',
        icon: 'lnr-home'
      },
      {
        name: 'About Me',
        link: '/aboutme',
        icon: 'lnr-user'
      },
      {
        name: 'Resume',
        link: '/resume',
        icon: 'lnr-license',
      },
      {
        name: 'Contact',
        link: '/contact',
        icon: 'lnr-envelope'
      }
    ]
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Droid Sans', 'Droid Serif', 'Roboto Slab', 'Playfair Display:800,']
          },
          custom: {
            families: ['Linearicons-Free'],
            urls: ['https://cdn.linearicons.com/free/1.0.0/icon-font.min.css']
          }
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
