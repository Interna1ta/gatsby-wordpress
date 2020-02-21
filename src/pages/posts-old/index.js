import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"

import Layout from '../../components/layout'
import blogStyles from './styles.module.scss'

const PostsTemplate = () => {
    const data = useStaticQuery(graphql`
        query postsQuery{
            allWordpressPost{
                edges{
                    node{
                        id
                        title
                        excerpt
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allWordpressPost.edges.map(({node}) => (
                    <li key={node.slug} className={blogStyles.post}>
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>

                            <div dangerouslySetInnerHTML={{__html: node.excerpt}} />

                            <p>{node.date}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

// class PostsTemplate extends Component {
//     render() {
//         const data = this.props.data

//         return(
//             <Layout>
//                 <h1>Blog</h1>
//                 <ol className={blogStyles.posts}>
//                     {data.allWordpressPost.edges.map(({node}) => (
//                         <li key={node.slug} className={blogStyles.post}>
//                             <Link to={'post/' + node.slug}>
//                                 <h3>{node.title}</h3>

//                                 <div dangerouslySetInnerHTML={{__html: node.excerpt}} />

//                                 <p>{node.date}</p>
//                             </Link>
//                         </li>
//                     ))}
//                 </ol>
//             </Layout>
//         )
//     }
// }

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

// export const pageQuery = graphql`
//     query postsQuery{
//         allWordpressPost{
//             edges{
//                 node{
//                     id
//                     title
//                     excerpt
//                     slug
//                     date(formatString: "MMMM DD, YYYY")
//                 }
//             }
//         }
//     }
// `