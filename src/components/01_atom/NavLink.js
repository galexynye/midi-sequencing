import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import msTheme from '../../styles/Theme'
// props are link and external or internal

const LinkStyle = styled.div`
       a{
            color: ${msTheme.colors.text};
             /* color: #998C00; */
            font-family: ${msTheme.font.headerFont};     
            &:hover{
                text-decoration: none;
                color: ${msTheme.colors.primary};
            }   
        }
`

const AltLinkStyle = styled.div`
    a{
        border-radius: 50px;
        font-family: ${msTheme.font.headerFont};    
        padding: 3px 20px;
        color: ${msTheme.colors.text};        
        background-color: ${msTheme.colors.green};        
        &:hover{
                text-decoration: none; 
                
            } 
    }
`

export default class NavLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { to, name, external, mobileMenuToggle } = this.props
        if (external) {
            return (
                <AltLinkStyle>
                    <a href={to}>{name}</a>
                </AltLinkStyle>
            )
        } else {
            return (
                <LinkStyle>
                    <Link to={to}>{name}</Link>
                </LinkStyle>
                // <a onClick={() => navigate(to)}>{name}</a>
                // <a onClick={() => this._handleClick(to, this.props.toggleMobileMenu)}>{name}</a>
            )
        }
    }
}

// import React from 'react'
// import { navigate } from 'gatsby'

// // props are link and external or internal

// export default class NavLink extends React.Component {
//     constructor(props) {
//         super(props)
//         this._handleClick = this._handleClick.bind(this)
//     }
//     _handleClick(propsFunc, to) {
//         // if (propsFunc) {
//         //     propsFunc()
//         // }

//         navigate(to)

//     }
//     render() {
//         const { to, name, external, toggleMobileMenu } = this.props
//         if (external) {
//             return (
//                 <a href={to}>{name}</a>
//             )
//         } else {
//             return (
//                 // <a onClick={this._handleClick(toggleMobileMenu, to)}>{name}</a>
//                 <button onClick={this._handleClick(toggleMobileMenu, to)}></button>
//             )
//         }
//     }
// }