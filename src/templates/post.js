import React from 'react'
import { graphql, useStaticQuery, StaticQuery } from 'gatsby'
// import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from '../components/layout'

// const PostTemplate = () => (
//     <StaticQuery 
//         query={graphql`
//             query currentPostQuery($id: String!) {
//                 wordpressPost(id: { eq: $id }) {
//                     title
//                     content
//                     featured_media{
//                         localFile{
//                             childImageSharp{
//                                 resolutions{
//                                     src
//                                     width
//                                     height
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 site {
//                     siteMetadata {
//                         title
//                         subtitle
//                     }
//                 }
//             }
//         `}

//         render={props => {
//             console.log(props)
//             const post = props.data.wordpressPost

//             // Get the value of the featured_media response //
//             const init_resolution = post.featured_media

//             // Set resolutions to an empty string variable //
//             let resolutions = ''

//             // If init_resolution DOES NOT equal null, then set //
//             // the resolutions varible to the Graphql result //
//             // If init_resolution DOES equal null, then the variable 
//             // will remain empty //
//             if (init_resolution !== null) {
//                 resolutions = post.featured_media.localFile.childImageSharp.resolutions
//             }

//             return(
//                 <Layout>
//                     {resolutions &&
//                         <div>
//                             <Img 
//                                 objectFit="cover"
//                                 objectPosition="50% 50%"
//                                 resolutions={resolutions} 
//                                 alt=""
//                             />
//                             {/* <img src={resolutions.src} alt=""/> */}
//                         </div>
//                     }
//                     <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
//                     <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    
//                     {/* <div dangerouslySetInnerHTML={{ __html: facebook }} /> */}
//                 </Layout>
//             )
//         }}
//     />
// )


const PostTemplate = (props) => {
    const post = props.data.wordpressPost

    // Get the value of the featured_media response //
    const init_resolution = post.featured_media

    // Set resolutions to an empty string variable //
    let resolutions = ''

    // If init_resolution DOES NOT equal null, then set //
    // the resolutions varible to the Graphql result //
    // If init_resolution DOES equal null, then the variable 
    // will remain empty //
    if (init_resolution !== null) {
        resolutions = post.featured_media.localFile.childImageSharp.resolutions
    }

    return(
        <Layout>
            {resolutions &&
                <div>
                    <Img 
                        objectFit="cover"
                        objectPosition="50% 50%"
                        resolutions={resolutions} 
                        alt=""
                    />
                    {/* <img src={resolutions.src} alt=""/> */}
                </div>
            }
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />                
        </Layout>
    )
}

export default PostTemplate

export const postQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
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
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`