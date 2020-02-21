import React from "react";
import { Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './posts.module.scss'

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
        <Layout>
            <h1>Blog</h1>
            {/* <h4>{pageCount} Pages</h4> */}

            <ol className={blogStyles.posts}>
                {group.map(({ node }) => (
                    <div key={node.slug} className={blogStyles.post}>
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                            <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
                            <p>{node.date}</p>
                        </Link>
                    </div>
                ))}
            </ol>

            <div className="d-flex justify-content-between">
                <div className="previousLink">
                    <NavLink test={first} url={"/posts/" + previousUrl} text="Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={"/posts/" + nextUrl} text="Next Page" />
                </div>
            </div>
        </Layout>
    );
};
export default IndexPage;