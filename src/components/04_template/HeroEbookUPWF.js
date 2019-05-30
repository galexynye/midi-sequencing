import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";
import { msTheme } from '../../styles/Theme'
// import bgImage2 from '../../assets/Backgrounds/dylan-mcleod-faders-black.jpg'

const HeroEBookUPWFStyle = styled.div`
    background-position: center;
    height: 100vh;
    background-image:linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${props => props.src || bgImage2});
    background-size: cover;
    position: relative;
    transition: height 1000000s ease;
    
`

const HeroEBookUPWFElementCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 27%;
    color: white;
/* -webkit-transform: translateX(-50%); */
    transform: translateX(-50%);
    max-width: 90%;
    /* margin: 0px 15px; */
    ${msTheme.mediaquery().medium}{
        top: 20%;
    }
     ${msTheme.mediaquery().smallHeight}{
        top: 13%;
    }
`



export class HeroEBookUPWFView extends Component {
    render() {
        // const pic = this.props.data.markdownRemark.frontmatter.bgImages.blackAndWhite.childImageSharp.fluid.src
        const pic = this.props.data.markdownRemark.frontmatter.bgImages.homeFaders.childImageSharp.fluid.src
        return (
            <HeroEBookUPWFStyle src={pic}>
                {/* <HeroEBookUPWFStyle> */}
                <HeroEBookUPWFElementCenter>
                    <FormEbook formWidth="350px" title="The Ultimate Producer's Workflow" subtitle="How to CREATE Pro Quality Music : Doing EVERYTHING Yourself" subColor="white" />
                </HeroEBookUPWFElementCenter>
            </HeroEBookUPWFStyle>
        )
    }
}


// The picture for the background is in the "what is midi article" so it is processed through sharp image.
export const HeroEBookUPWF = props => (
    <StaticQuery
        query={graphql`
     query{
    markdownRemark(fields: { slug: { eq: "/article/what-is-midi" } }) {
      frontmatter {
        bgImages{
          homeFaders{
            childImageSharp{
              fluid{
                src
              }
            }
          }
        }
      }
    }
}
    `}
        render={data => <HeroEBookUPWFView data={data} {...props} />}
    />
)
