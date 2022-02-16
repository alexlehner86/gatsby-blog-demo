# Gatsby Blog Demo

This is a demo version of my blog "Oida, is des org!" built with the [Gatsby framework](https://www.gatsbyjs.com/). It is a copy of my private blog repository, stripped of all content. My idea is to share how I setup Gatsby for the purpose of managing a Web Development Blog. You can visit my actual blog [here](https://www.oidaisdes.org/).

## General Setup

The main configuration is done in the gatsby-config.js file. Blog posts are created from MDX files via the Gatsby framework and plugins. The blog is setup as bilingual (English and German), although the current implementation is rather hacky. Either because I didn't fully understand the `gatsby-theme-i18n` plugin or it still has some flaws.

## Features

- Conversion of MDX files into static sites via [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) and the [gatsby-plugin-page-creator](https://www.gatsbyjs.com/plugins/gatsby-plugin-page-creator/).
- SEO optimization via [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/).
- Image optimization via [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/).
- Internationalization via [gatsby-theme-i18n](https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/).