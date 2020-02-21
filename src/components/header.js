import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

import MainMenu from './MenuDesktop/MainMenu'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {/* {data.site.siteMetadata.title} */}DO bcn
                </Link>
            </h1>
            <MainMenu />
            {/* <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem} 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem} 
                            to="/sample-page"
                        >
                            Sample
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem} 
                            to="/posts"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header