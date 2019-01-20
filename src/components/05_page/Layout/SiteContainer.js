import React from 'react'
import styled from 'styled-components'
import MainNav from '../../04_template/MainNav/MainNav'
import Footer from '../../04_template/Footer/Footer'
import { injectGlobal } from 'styled-components'
import msTheme from '../../../styles/Theme'

// Global Styling & Utility Classes
injectGlobal`
*{
    
}
body{
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ${msTheme.typography.bodyFont};
}

h1 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.typography.headerFont};
	font-size: 94px;
	font-weight: 800;
	letter-spacing: -2px;
	line-height: 84px;
	margin-bottom: 50px;
	text-transform: uppercase;
}

h2 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.typography.headerFont};
	font-size: 40px;
	font-weight: 800;
	letter-spacing: -2px;
	line-height: 45px;
	/* margin-bottom: 72px; */
	/* text-transform: uppercase; */
    max-width: 650px;
} 

h3, h4, h5 {
    font-size: 30px;
}

p {
    /* color: #231900; */
    color: ${msTheme.colors.text};
	font-family: 'Crimson Text';
	font-size: 24px;
	font-weight: 500;
	line-height: 34px;
    /* margin: auto; */
	margin-bottom: 34px;
	max-width: 650px;
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