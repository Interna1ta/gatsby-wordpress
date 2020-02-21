import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => (
    <Layout>
    <h1>Pere Serra Bosch,</h1>
    <p>Need a developer? Don't be shy and <Link to="/contact">contact me</Link>!</p>
    </Layout>
)

export default IndexPage