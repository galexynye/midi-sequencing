import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import BGImage from '../../assets/LandingCards/BuildAStudio.jpg'


const BackgroundImageStyle = styled.div`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    background-position: center ;
    /* padding: 700px 1000px;     */
    
    /* background-image:linear-gradient(${props => props.color1 || 'rgba(0, 0, 0, 0)'}, ${props => props.color2 || 'rgba(0, 0, 0, 0)'}), url(${props => props.src || BGImage}); */
    background-image:url(${props => props.src || BGImage});
    background-size: cover;
    position: relative;
    max-width:100%;
    @media screen and (max-width: ${props => props.breakPoint ? props.breakPoint + 'px' : msTheme.breakPoints.medium + 'px'}) {
        height: ${props => props.heightSmall ? props.heightSmall : props.height ? props.height : "100%"};
        width: ${props => props.widthSmall || "100%"};
        max-width:100%;

    }    
`


export class BackgroundImage extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { children, src, height, width, widthSmall, heightSmall, color1, color2, breakPoint } = this.props
        return (

            <BackgroundImageStyle src={src} height={height} width={width} heightSmall={heightSmall} breakPoint={breakPoint} widthSmall={widthSmall} color1={color1} color2={color2} >
                {children}
            </BackgroundImageStyle>

        )
    }
}


