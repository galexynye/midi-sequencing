import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";
import { msTheme } from '../../styles/Theme'
import bgImage2 from '../../assets/Backgrounds/dylan-mcleod-faders-black.jpg'
import { WidthWrapper } from '../00_utilities/Utilities';

const HeroEBookUPWFStyle = styled.div`
    background-position: center;
    height: 100vh;
    background-image:linear-gradient(rgba(120, 120, 120, 0.8), rgba(0, 0, 0, 0.6)), url(${props => props.src || bgImage2});
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

const YourEmail = styled.div`
a{
    /* margin: auto; */
    color: white;
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
                    <FormEbook formWidth="350px" title="The Ultimate Producer's Workflow" subtitle="A Professional Guide to Producing, Mixing and Mastering Your Own Music" subColor="white" />
                    <WidthWrapper width="200px"><YourEmail><Link to="your-email">What happens to your email?</Link></YourEmail></WidthWrapper>
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
              fluid(quality:95){
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
