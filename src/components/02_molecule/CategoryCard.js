import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { msTheme } from '../../styles/Theme'
// Title (50%)
// Description (50%)
// BG pic potentially 

const CategoryCardStyled = styled.div`
    border: 2px solid ${msTheme.colors.text};
    padding: 15px;
    h2{color: ${msTheme.colors.primary};}
    /* p{
        font-family: ${msTheme.font.headerFont};
        font-size: 17px;
    } */
    /* display: flex;
    flex-flow: column; */
    text-align: center;
    &:hover{
        background-color: ${msTheme.colors.primary};
        cursor: pointer;
        h2{
            color: white;
        }
        p{
            color: white;
        }
    }
    
`

export const CategoryCard = ({ title, description }) => {
    return (
        <CategoryCardStyled>
            <h2>{title}</h2>
            <p>{description}</p>
        </CategoryCardStyled>
    )
}



