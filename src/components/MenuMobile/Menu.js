import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby'

import mainMenuStyles from './Menu.module.scss'

const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpApiMenusMenusItems(filter: {
                name:{
                    eq: "MainMenu"
                }
            }){
                edges{
                    node{
                        id
                        name
                        items {
                            title
                            url
                            object_slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <nav>
                <ul className={mainMenuStyles.navList}>
                    {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item) =>
                        <li key={item.object_slug} className={mainMenuStyles.navItem} >
                            <Link 
                                // className={mainMenuStyles.navItem} 
                                activeClassName={mainMenuStyles.activeNavItem} 
                                to={item.url}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </StyledMenu>
    )

}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
