import React from 'react'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
// props are link and external or internal

// TODO: Add component notes 

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

//TODO: ADD Alt styles based on props
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
    // TODO: if statements return based on alt style or not and colors
    render() {
        const { to, name, external } = this.props
        if (external) { // change to (if alt style)
            return (
                <AltLinkStyle>
                    <a href={to}>{name}</a>
                </AltLinkStyle>
            )
        } else { // Returns the standard link style
            return (
                <StandardLinkStyle>
                    <Link to={to}>{name}</Link>
                </StandardLinkStyle>
            )
        }
    }
}

