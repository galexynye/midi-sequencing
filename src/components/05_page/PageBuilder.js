
import React from 'react'
// import styled from 'styled-components'
import SiteContainer from './Layout/SiteContainer'
import MainContainer from './Layout/MainContainer'
// import SiteContainer from '../components/05_page/Layout/SiteContainer'
// import MainContainer from '../components/05_page/Layout/MainContainer'

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showSomethingt: false // Page State
        }
        // this._handleClick = this._handleClick.bind(this)
    }
    // _handleClick() {
    //     this.setState({
    //         showSomething: !this.state.showSomething
    //     })
    // }
    render() {
        return (
            <SiteContainer>
                <MainContainer>
                </MainContainer>
            </SiteContainer>
        )
    }
}

export default Page

/*
To build a page
    1. Create a file in the src > pages directory.
    2. Copy and Paste this Component to start building a Page.
    3. Rename Page to appropriate page name
    4. Update the import statements to match file structure if necessary.
Optional
    5. Add/Remove State to the Page component if necessary.
    6. Add a styled component for page

About this page builder
    <SiteContainer> - wrapper for every page. base styles. global classes, nav and footer
    <MainContainer> - wrapper for content of every page
*/