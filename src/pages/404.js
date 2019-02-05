import React, { PureComponent } from 'react'

import { ArticleContainer } from '../components/05_page/ArticleContainer'

export default class NoFind extends PureComponent {
    render() {
        return (
            <ArticleContainer>
                <h1>We're LOST!</h1>
                <p>Hello! You've gone somewhere that no longer exists or never did!</p>
                <p>Really sorry about that, you can head back to <a href="https://www.musicsequencing.com">Music Sequencing with this link</a>.</p>
                <p>If there's been a problem or you have a suggestion please let me know by visiting the <a href="https://www.musicsequencing.com/contact">contact page.</a></p>
            </ArticleContainer>
        )
    }
}


// import React from 'react'
// import Wrapper from '../styles/oldCrap/Wrapper'
// import Menu from '../components/MainNavigation/Menu'
// import { Link } from 'gatsby'

// const NotFoundPage = () => (
//   <Wrapper>
//     {/* <Menu sideNav={true} /> */}
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//     {/* <Link to="/">Click here to go home</Link> */}
//     <a href="https://www.musicsequencing.com">Go back home</a>
//   </Wrapper>
// )

// export default NotFoundPage
