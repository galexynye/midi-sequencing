import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

// Simple Card Basically Does 2 things

const SimpleCardStyle = styled.div`    
    /* height: ${props => props.height || 'auto'}; */
    min-height: 100%;
    display: flex;
    flex-flow: ${props => props.flexFlow || 'column'};
    position: relative;
    top: 0;

    article{
        padding: 15px 0px 0px 0px;
        display: flex;        
        flex: 1;
        justify-content: ${props => props.justifyContent || 'space-between'} ;
        flex-direction: column;
    }

    h2{
        padding: 0px;
    }
    p{
        
    }
`

const TopTitle = styled.h2`
    margin-top: 20px;
    color: ${props => props.color || msTheme.colors.text};
     @media screen and (min-width: ${props => props.breakPoint ? props.breakPoint + 'px' : msTheme.breakPoints.medium + 'px'}){
        display: none;
    }
`



const CardThumbnail = styled.div`
  position: relative;
  padding-bottom: ${props => props.imgHeight || "60%"};
  background-size: cover;
  background-position: center center;
  background-image:url(${props => props.img || 'black'});
`

export const CardThumbnailLabel = styled.div`
    /* top: 0px; */
    bottom: 0px;
    left: 0px;
    position: absolute;
    /* color: ${msTheme.colors.text}; */
    color: white;
	font-family: ${msTheme.font.headerFont};
    font-size: 25px;
	font-weight: 300;
	padding: 5px;
	text-transform: uppercase;
    /* background-color: ${props => props.labelBgColor ? props.labelBgColor : props.learn ? props.learn : props.blog ? props.blog : msTheme.colors.yellow}; */
    background-color: ${msTheme.colors.primary};    
    
`


export class SimpleCard extends React.PureComponent {

    render() {
        const { children, justifyContent, title, label, imgLink, topTitle, topTitleBreakPoint, topTitleColor, img, text, imgHeight } = this.props
        return (
            <SimpleCardStyle justifyContent={justifyContent}>
                {topTitle &&
                    <TopTitle
                        breakPoint={topTitleBreakPoint}
                        color={topTitleColor}
                    >{topTitle}
                    </TopTitle>}

                {imgLink ?
                    <Link to={imgLink}>
                        <CardThumbnail img={img} imgHeight={imgHeight} >
                            {label && <CardThumbnailLabel>{label}</CardThumbnailLabel>}
                        </CardThumbnail>
                    </Link>
                    :
                    <CardThumbnail img={img} imgHeight={imgHeight}>
                        {label && <CardThumbnailLabel>{label}</CardThumbnailLabel>}
                    </CardThumbnail>
                }
                <article>
                    {children}
                </article>
            </SimpleCardStyle>
        )
    }
}


