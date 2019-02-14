import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import { ButtonCTA } from '../01_atom/ButtonCTA';
import { WidthWrapper, FlexboxOrganism } from '../00_utilities/Utilities';
// Title (50%)
// Description (50%)
// BG pic potentially 

const CategoryCardStyled = styled.div`
    border: 2px solid ${props => props.color || msTheme.colors.text};
    display: flex;
    flex-flow: column;
    height: 100%;
    text-align: center;
    /* padding: 15px; */
    h2{
        color: ${props => props.color || msTheme.colors.primary};
        padding: 15px 15px 0px 15px;
        min-height: 10%;
        }
     p {
        color: ${props => props.textColor || msTheme.colors.text};
        height: 20%;
        padding: 0px 15px 15px 15px;
        font-family: ${msTheme.font.headerFont};
        font-size: 16px;
    }


    &:hover{
        
        cursor: pointer;
        /* background-color: ${props => props.color || msTheme.colors.primary};
        h2{            
            color: ${props => props.hoverColor || 'white'};       
        }
        p{           
            color:${props => props.hoverColor || 'white'};
        } */
    }
    
    ${msTheme.mediaquery().medium}{
        p{
            /* Shows the description for the coming soon / when there is no button */
            display: ${props => props.hideButton ? 'initial' : 'none'}; 
        }
    }
`

export const CategoryCard = ({ title, description, to, hideButton, hoverColor, color, textColor }) => {
    return (
        <div>
            <Link to={to} className="tDNone">
                {/* <CategoryCardStyled onClick={() => navigate(`${to}`)} role="link" tabIndex="0"> */}
                <CategoryCardStyled hoverColor={hoverColor} color={color} textColor={textColor} hideButton={hideButton}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {!hideButton &&
                        <WidthWrapper width="200px" widthSmall="200px">
                            <ButtonCTA text={`Learn more`} bgColor={color ? color : msTheme.colors.primary} color="white" />
                        </WidthWrapper>}

                </CategoryCardStyled>
            </Link>
        </div>


    )
}



