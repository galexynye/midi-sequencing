import React from 'react'
import styled from 'styled-components'
import MainNav from '../../04_template/MainNav/MainNav'
import Footer from '../../04_template/Footer/Footer'
import { injectGlobal } from 'styled-components'
import msTheme from '../../../styles/Theme'

// Global Styling
injectGlobal`
*{
    /* color: ${msTheme.colors.orange}; */
}
body{
    margin: 0;
    padding: 0;
    /* background-color: blue; */
    box-sizing: border-box;
}
`

class SiteContainer extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <MainNav></MainNav>
                {children}
                <Footer></Footer>
            </div>
        )
    }
}

// export default Template
export default SiteContainer