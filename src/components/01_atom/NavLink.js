import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'




//TODO: Add Alt style based on Props
const StandardLinkStyle = styled.div`
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
        background-color: ${msTheme.colors.primarylightest};        
              /* background-color: ${msTheme.colors.primayhighlighter}; */
        &:hover{
                text-decoration: none; 
                background-color: ${msTheme.colors.primary}
                
                /* background-color: ${msTheme.colors.primarylightest};   */
            } 
    }
`

export class NavLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { to, name, external, altStyleAllowed, altStyle } = this.props

        const externalTest = (isExternal, to, name) => {
            if (isExternal) {
                return <a href={to}>{name}</a>
            } else {
                return <Link to={to}>{name}</Link>
            }
        }

        const TheNavLink = externalTest(external, to, name);

        if (altStyle && altStyleAllowed) {
            return (
                <AltLinkStyle>
                    {TheNavLink}
                </AltLinkStyle>
            )
        } else {
            return (
                <StandardLinkStyle>
                    {TheNavLink}
                </StandardLinkStyle>
            )
        }
    }
}

