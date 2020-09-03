import React, { Component } from 'react'
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";
import { msTheme } from '../../styles/Theme'
// import bgImage2 from '../../assets/Backgrounds/dylan-mcleod-faders-black.jpg'
import { WidthWrapper } from '../00_utilities/Utilities';

const HeroEBookUPWFStyle = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
`

const HeroEBookUPWFElementCenter = styled.div`    
    color: white;
    width: 1000px;
    max-width: 90%;
    margin: 0px auto;
`

const YourEmail = styled.div`
text-align: center;
a{
    
    margin: auto;
    color: white;
    }
`

const BackgroundSection = () => (
    <StaticQuery
        query={graphql`
            query MyQuery {
    file(relativePath: {eq: "dylan-mcleod-faders-black.jpg"}) {
        childImageSharp {
        fluid(quality: 100, maxWidth: 1920){
            base64
            aspectRatio
            sizes
            src
            srcSet
        }
        }
    }
    }
        `}
        render={data => {
            const imageData = data.file.childImageSharp.fluid
            return (

                <BackgroundImage
                    Tag="div"
                    // className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <HeroEBookUPWFStyle>
                        {/* <h2>Hello</h2> */}
                        <HeroEBookUPWFElementCenter>
                            <FormEbook formWidth="350px" title="The Ultimate Producer's Workflow" subtitle="A Professional Guide to Producing, Mixing and Mastering Your Own Music" subColor="white" />
                            <WidthWrapper width="350px"><YourEmail><Link to="your-email">Your email stays private forever.</Link></YourEmail></WidthWrapper>
                        </HeroEBookUPWFElementCenter>
                    </HeroEBookUPWFStyle>
                </BackgroundImage>

            )
        }}
    />
)


export const HeroEBookUPWF = styled(BackgroundSection)`        
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`


