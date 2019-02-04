import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { reset } from '../../../styles/CSSReset'
import { MainContainer } from './MainContainer'
import { Header } from '../../04_template/Header'
import { Footer } from '../../04_template/Footer'
import { SidebarMobileNav } from '../../04_template/SideBarMobileNav'

import favicon from '../../../assets/midi-sequencing-icon-circle.png'

// Global Styling & Utility Classes
const GlobalStyle = createGlobalStyle`

${reset}

body{
    background-color: #ffffff;
    box-sizing: border-box;
    font-family: ${msTheme.font.bodyFont};
}

h1 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont};
	font-size: 94px;
	font-weight: 300;
	letter-spacing: -3px;
	line-height: 87px;
	margin-bottom: 27px;
	text-transform: uppercase;
     word-wrap: break-word;
}

h2 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont};
	font-size: 34px;
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 39px;
	margin-bottom: 20px;
    margin-top: 80px;
	/* text-transform: uppercase; */
    :first-child{
        margin-top: 10px;
    }
    
} 

h2{

}

 @media screen and (max-width: ${msTheme.breakPoints.medium + "px"} ) {
     h2{
         padding-top: 5px;
     }
 }


h3, h4, h5 {
    font-size: 27px;
    margin-bottom: 14px;
    padding-top: 5px;
}

p {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.bodyFont};
	font-size: 19px;
	font-weight: 500;
	line-height: 27px;
	margin-bottom: 27px;
}

ol, ul {
    padding-left: 19px;
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
    margin: 0px 0px 10px 5px;
}

a {
    text-decoration: none;
    color: ${msTheme.colors.primary};
    &:hover{
        text-decoration: underline
    }
}

.center {
    text-align: center;
}

.noMargin{
    margin:0px;
}

.mT20{
    margin-top: 20px;
}

.mB40 {
    margin-bottom: 40px;
}

.pB40{
    padding-bottom: 40px;
}

.pT40{
    padding-top: 40px
}

.hideMobile {
    @media screen and (max-width: ${msTheme.breakPoints.small}) {
        display: none;
    }
}

.hideMedium {
    @media screen and (min-width: ${msTheme.breakPoints.medium}) {
        display: none;
    }
}

.hide{
    display: none;
}

.headerFont{
    font-family: ${msTheme.font.headerFont};
}



`

class SiteContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: false,
            windowWidth: 0, // initially set to 0 because 
        }
    }
    componentDidMount() {
        this._handleWindowSizeChange()
        window.addEventListener('resize', this._handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._handleWindowSizeChange)
    }
    _toggleMobileMenu = () => {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen,
        })
    }
    _handleWindowSizeChange = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
        if (this.state.windowWidth > msTheme.breakPoints.medium) {
            this.setState({
                mobileMenuOpen: false
            })
        }
    }
    render() {
        const { children, headerPosition } = this.props
        return (
            <div>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[
                        { name: 'description', content: 'Learn Music Production' },
                        {
                            name: 'google-site-verification',
                            content: 'ApEgiydr2XV738hMqiDL6JyWjg0Cq5ybbWmQrnDHq9c',
                        },
                    ]}
                    title='Music Sequencing'
                    link={[
                        {
                            rel: 'shortcut icon',
                            type: 'image/png',
                            href: `${favicon}`,
                        },
                    ]}
                />
                <GlobalStyle />
                <SidebarMobileNav mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu} />
                <MainContainer mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu}>
                    <Header toggleMobileMenu={this._toggleMobileMenu} headerPosition={headerPosition}></Header>
                    {children}
                    <Footer></Footer>
                </MainContainer>
            </div>
        )
    }
}

export default SiteContainer

