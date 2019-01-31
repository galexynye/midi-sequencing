import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { WidthWrapper, PaddingWrapper } from '../00_utilities/Utilities'
import { BackgroundImage } from "../01_atom/BackgroundImage";
// import BGImage from '../../assets/Backgrounds/blackAndWhiteFaders.jpg'

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
        /* justify-content: space-between; */
        flex-direction: column;
    }

    h2{
        padding: 0px;
    }
    p{
        
    }
`

const TopTitle = styled.h2`
    ${msTheme.mediaquery().mediumMin}{
        display: none;
    }
`



const CardThumbnail = styled.div`
  padding-bottom: ${props => props.imgHeight || "60%"};
  background-size: cover;
  background-position: center center;
  background-image:url(${props => props.img || 'black'});
`

export const SimpleCard = ({ title, topTitle, img, text, imgHeight }) => {
    return (


        <SimpleCardStyle>
            {topTitle && <TopTitle>{topTitle}</TopTitle>}
            <CardThumbnail img={img} imgHeight={imgHeight} />
            <article>
                {title && <h2>{title}</h2>}
                <p>{text}</p>
            </article>
        </SimpleCardStyle>
    )
}


