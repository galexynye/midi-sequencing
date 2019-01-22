import React from 'react'
import { injectGlobal } from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import { reset } from '../../../styles/CSSReset'
import { MainContainer } from './MainContainer'
import { Header } from '../../04_template/Header'
import { Footer } from '../../04_template/Footer'
import { SidebarMobileNav } from '../../04_template/SideBarMobileNav'



// Global Styling & Utility Classes
injectGlobal`

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
	margin-bottom: 30px;
	text-transform: uppercase;
}

h2 {
    color: ${msTheme.colors.text};
	font-family: ${msTheme.font.headerFont};
	font-size: 34px;
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 39px;
	margin-bottom: 20px;
    padding-top: 20px;
	/* text-transform: uppercase; */
    max-width: 650px;
    
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

.hideMobile {
    @media screen and (max-width: ${msTheme.breakpoints.small}) {
        display: none;
    }
}

.hideMedium {
    @media screen and (min-width: ${msTheme.breakpoints.medium}) {
        display: none;
    }
}

.hide{
    display: none;
}

`

class SiteContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: false,
            windowWidth: 0, // initially set to 0 because 
        }
        this._toggleMobileMenu = this._toggleMobileMenu.bind(this)
        this._handleWindowSizeChange = this._handleWindowSizeChange.bind(this)
    }
    componentDidMount() {
        this._handleWindowSizeChange()
        window.addEventListener('resize', this._handleWindowSizeChange)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this._handleWindowSizeChange)
    }
    _toggleMobileMenu() {
        this.setState({
            mobileMenuOpen: !this.state.mobileMenuOpen,
        })
    }
    _handleWindowSizeChange() {
        this.setState({
            windowWidth: window.innerWidth
        })
        if (this.state.windowWidth > msTheme.breakpoints.medium) {
            this.setState({
                mobileMenuOpen: false
            })
        }
    }
    render() {
        const { children } = this.props
        return (
            <div>
                <SidebarMobileNav mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu} />
                <MainContainer mobileMenuOpen={this.state.mobileMenuOpen} toggleMobileMenu={this._toggleMobileMenu}>
                    <Header toggleMobileMenu={this._toggleMobileMenu}></Header>
                    {children}
                    <Footer></Footer>
                </MainContainer>
            </div>
        )
    }
}

export default SiteContainer

