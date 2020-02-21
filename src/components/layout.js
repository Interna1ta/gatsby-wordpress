import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import App from '../App'

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <Helmet
                title="Gatsby Default Starter"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <App />
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout