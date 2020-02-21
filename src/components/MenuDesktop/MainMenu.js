import React from 'react'
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby'

import mainMenuStyles from './mainMenu.module.scss'

// export default MainMenu = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allWordpressWpApiMenusMenusItems(filter: {
//                 name:{
//                     eq: "MainMenu"
//                 }
//             }){
//                 edges{
//                     node{
//                         id
//                         name
//                         items {
//                             title
//                             url
//                             object_slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     return (
//         <nav>
//             <ul className={mainMenuStyles.navList}>
//                 {data.map((item) =>
//                     <li key={item.object_slug}>
//                         <Link 
//                             className={mainMenuStyles.navItem} 
//                             activeClassName={mainMenuStyles.activeNavItem} 
//                             to={item.url}
//                         >
//                             {item.title}
//                         </Link>
//                     </li>
//                 )}
//             </ul>
//         </nav>
//     )
// }

const MainMenu = () => (
    <StaticQuery 
        query={graphql`
            {
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
        `} 
        
        render={props => {
            const data = props.allWordpressWpApiMenusMenusItems.edges[0].node.items
            return (
                <nav>
                    <ul className={mainMenuStyles.navList}>
                        {data.map((item) =>
                            <li key={item.object_slug}>
                                <Link 
                                    className={mainMenuStyles.navItem} 
                                    activeClassName={mainMenuStyles.activeNavItem} 
                                    to={item.url}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )
        }}
    />
);

export default MainMenu