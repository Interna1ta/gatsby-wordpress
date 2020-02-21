module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        subtitle: 'Fetch Data from Local WP Install',
        author: 'Pere'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: `WPGraphQL`,
                fieldName: `wpgraphql`,
                url: `http://localhost/learn/gatsby-app-wordpress/graphql`,
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "sandboxfef",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true,
                searchAndReplaceContentUrls: {
                    sourceUrl: "http://localhost/learn/gatsby-app-wordpress/",
                    replacementUrl: "/",
                }
            }
        }
    ],
};
