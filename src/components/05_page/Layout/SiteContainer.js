import React from 'react'
import styled from 'styled-components'
import MainNav from '../../04_template/MainNav/MainNav'
import Footer from '../../04_template/Footer/Footer'
import { injectGlobal } from 'styled-components'
import msTheme from '../../../styles/Theme'
import { reset } from '../../../styles/CSSReset'

// Global Styling & Utility Classes
injectGlobal`

${reset}

body{
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ${msTheme.typography.bodyFont};
}

h1 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.typography.headerFont};
	font-size: 94px;
	font-weight: 800;
	letter-spacing: -3px;
	line-height: 87px;
	margin-bottom: 30px;
	text-transform: uppercase;
}

h2 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.typography.headerFont};
	font-size: 32px;
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 36px;
	margin-bottom: 20px;
	/* text-transform: uppercase; */
    max-width: 650px;
} 

h3, h4, h5 {
    font-size: 27px;
    margin-bottom: 17px;
}

p {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.typography.bodyFont};
	font-size: 19px;
	font-weight: 500;
	line-height: 27px;
	margin-bottom: 27px;
	max-width: 650px;
}

ol, ul {
    padding-left: 19px;
    /* @media screen and (max-width: ${msTheme.media.medium}){
        padding-left: 19px;
    } */
    margin-bottom: 22px;
}

ul {
    list-style-type: circle;
    
}

ol {
    list-style-type: decimal;
    
}

li {
    font-size: 19px;
    line-height: 27px;
    margin-bottom: 5px;
}

a {
    text-decoration: none;
    color: ${msTheme.colors.purple};
    &:hover{
        text-decoration: underline
    }
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