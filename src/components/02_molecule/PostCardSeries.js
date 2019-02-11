import React from 'react'
import { ResponsivePhoto, FlexboxOrganism, GridContainer } from '../00_utilities/Utilities'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import TestImg from '../../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg'
import { msTheme } from '../../styles/Theme'

const PostCardSeriesStyled = styled.div`
    a {        
            text-decoration: none;        
    }
    h2{
        margin-top: 0px;
    }
    &:hover{                
        h2 {            
            
            color: ${msTheme.colors.primary};
            
        }
    }
`


export const PostCardSeries = ({ title, description, img, to, number }) => {
    return (

        <PostCardSeriesStyled>

            <Link to={to}>
                <GridContainer maxWidth="1000px" gTC="1fr 2fr" gTCL="1fr 1fr" gTCM="1fr" gridGap="20px 40px" gridGapL="20px 20px">
                    <ResponsivePhoto src={img ? img : TestImg} />
                    <FlexboxOrganism flexFlow="column" alignItems="flex-start" >
                        <h2>{number ? `${number}. ` : ''}{title}</h2>
                        <p>{description}</p>
                    </FlexboxOrganism>
                </GridContainer>
            </Link>
        </PostCardSeriesStyled>

    )

}
