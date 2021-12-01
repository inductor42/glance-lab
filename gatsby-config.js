/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const { nanoid } = require('nanoid');
const { version } = require('./package.json');


const siteUrl = process.env.URL || `https://www.devjoy.in`

module.exports = {
  siteMetadata: {
    title: `Halo-Lab`,
    description: `Experts from all your network providers integrated into one powerful platform.`,
    author: `@halolabteam`,
    email: `mail@devjoy.in`,
    siteUrl: `https://devjoy.in`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: process.env.DRIBBBLE_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Halo Lab`,
        short_name: `Halo Lab`,
        start_url: `/`,
        background_color: `#02021e`,
        theme_color: `#02021e`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
        description: `Experts from all your network providers integrated into one powerful platform.`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/portfolio/`,
          `/services/`,
          `/contacts/`,
          `/thanks/`,
          `/404/`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@scenes': 'src/scenes',
          '@hooks': 'src/hooks',
          '@contexts': 'src/contexts',
          '@services': 'src/services',
          '@helpers': 'src/helpers',
          '@styles': 'src/styles',
          '@functions': 'src/styles/functions',
          '@constants': 'src/constants',
        },
        extensions: ['js', 'sass', 'scss'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ['develop'],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          const services = [
            "https://www.devjoy.in/services/responsive-website-design/",
            "https://www.devjoy.in/services/healthcare-medical-web-design/",
            "https://www.devjoy.in/services/mobile-application-design-services/",
            "https://www.devjoy.in/services/saas-website-design/",
            "https://www.devjoy.in/services/branding/",
            "https://www.devjoy.in/services/pitch/",
            "https://www.devjoy.in/services/media/",
            "https://www.devjoy.in/services/landing/",
            "https://www.devjoy.in/services/front-end-development-services/",
            "https://www.devjoy.in/services/back-end-development-services/",
            "https://www.devjoy.in/services/web-design-and-development/",
          ]

          const pages = []

          allSitePage.edges.forEach(edge => {
            pages.push({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            });
          })

          services.forEach(service => {
            pages.push({
              url: service,
              changefreq: `daily`,
              priority: 0.7,
            });
          })

          return pages
        },
      }, 
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.halo-lab.onrender.com',
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
    {
      resolve: `gatsby-plugin-css-modules-emoji`,
      options: {
        enableOnDevelopment: false,
        selectorLength: 7,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        disable: !process.env.npm_config_report,
        devMode: false,
        analyzerMode: 'static',
        reportFilename: `../reports/report_v${version}_${nanoid(5)}_.html`,
        openAnalyzer: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://devjoy.in`,
      },
    },
  ],
};
