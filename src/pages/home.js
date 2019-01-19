
import React from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import ContentContainer from '../components/05_page/Layout/ContentContainer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // babaShow: false // Page State
        }
        // this._handleClick = this._handleClick.bind(this)
    }
    // _handleClick() {
    //     this.setState({
    //         babaShow: !this.state.babaShow,
    //     })
    // }
    render() {
        return (
            <SiteContainer>
                <ContentContainer>
                </ContentContainer>
            </SiteContainer>
        )
    }
}

export default Home

/*
To build a page
    1. Create a file in the src > pages directory.
    2. Copy and Paste this Component to start building a Page.
    3. Rename Page to appropriate page name
    3. Update the import statements to match file structure if necessary.

About this page builder
    <SiteContainer> - wrapper for every page. base styles. global classes, nav and footer
    <ContentContainer> - wrapper for content of every page
*/