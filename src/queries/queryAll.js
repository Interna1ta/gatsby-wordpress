'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                    featured_media{
                        localFile{
                            childImageSharp{
                                resolutions{
                                    src
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`