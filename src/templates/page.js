import React from "react"
// import React, { Component } from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PageTemplate = (props) => {
    // const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wordpressPage

    return(
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
            <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

            <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
            <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
        </Layout>
    )
}

// class PageTemplate extends Component {
//     render() {
//         const siteMetadata = this.props.data.site.siteMetadata
//         const currentPage = this.props.data.wordpressPage

//         console.log(currentPage)

//         return (
//             <Layout>
//                 <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
//                 <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

//                 <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
//                 <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
//             </Layout>
//         )
//     }
// }

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`