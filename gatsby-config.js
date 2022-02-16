module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.oidaisdes.org',
        title: 'Web Dev Blog',
        description:
            'Web Development Blog by Alexander Lehner with focus on Accessibility.',
        image: 'https://www.oidaisdes.org/social_sharing.png',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        // ----------------------------------------------------------------------------------
        // This set of plugins is to enable creating MDX blog posts from the src/posts folder
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-theme-i18n',
            options: {
                defaultLang: 'en',
                configPath: require.resolve('./i18n/config.json'),
            },
        },
        'gatsby-remark-images',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200,
                            linkImagesToOriginal: false,
                        }
                    },
                    {
                        resolve: 'gatsby-remark-highlight-code',
                        options: {
                            terminal: 'carbon',
                            theme: 'dracula',
                        },
                    },
                ],
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.tsx')
                },
            },
        },
        // end of MDX config
        // --------------------------------------------------------------------------------------
        // This set of plugins is to enable optimization of the images from the src/images folder
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        // end of images config
    ],
};
