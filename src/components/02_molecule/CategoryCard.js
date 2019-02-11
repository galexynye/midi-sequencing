import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { msTheme } from '../../styles/Theme'
// Title (50%)
// Description (50%)
// BG pic potentially 

const CategoryCardStyled = styled.div`
    border: 2px solid ${msTheme.colors.text};
    /* padding: 15px; */
    h2{
        color: ${msTheme.colors.primary};
        padding: 15px 15px 0px 15px;
        }
     p {
        padding: 0px 15px 15px 15px;
        font-family: ${msTheme.font.headerFont};
        font-size: 16px;
    }
    /* p{
        font-family: ${msTheme.font.headerFont};
        font-size: 17px;
    } */
   
    height: 100%;
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

export const CategoryCard = ({ title, description, to }) => {
    return (
        <div>
            <Link to={to}>
                {/* <CategoryCardStyled onClick={() => navigate(`${to}`)} role="link" tabIndex="0"> */}
                <CategoryCardStyled>

                    <h2>{title}</h2>
                    <p>{description}</p>

                </CategoryCardStyled>
            </Link>
        </div>


    )
}



