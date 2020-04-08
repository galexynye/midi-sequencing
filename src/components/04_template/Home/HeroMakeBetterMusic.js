import React from 'react'
import { HeroContainer } from '../../01_atom/HeroContainer'
import { HeroCenteredElement } from '../../01_atom/HeroCenteredElement'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { PageTitle } from '../../01_atom/PageTitle'
import { msTheme } from '../../../styles/Theme'
import HeroInstruments from '../../../assets/Backgrounds/heroInstruments_1080.png'
import { graphql, StaticQuery } from 'gatsby'
// import Faders from '../../../assets/Backgrounds/blackAndWhiteFaders.jpg'

const HeroMakeBetterMusicView = (props) => {
  return (
    <HeroContainer linearGradient={"rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)"} bgImage={props.data.markdownRemark.frontmatter.bgImages.homeFaders} >
      <HeroCenteredElement top="30%">
        <PageTitle title="Make Better Music" margin="0px" color="white"></PageTitle>
        <p className="headerFont quote center white">10 Projects that will make you a better producer.</p>
        {/* <p className="headerFont quote center white" style={{ margin: "-30px 0px 40px 0px" }}> - Galileo Galilei</p> */}
        <WidthWrapper width="300px">
          <ButtonCTA text="The 10 Project Challenge" to="/projects" bgColor={msTheme.colors.greenlight} border={`1px solid ${msTheme.colors.textlight}`}></ButtonCTA>
        </WidthWrapper>
      </HeroCenteredElement>

    </HeroContainer>
  )
}

// export default HeroMakeBetterMusic

// The picture for the background is in the "what is midi article" so it is processed through sharp image.
export const HeroMakeBetterMusic = props => (
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
    render={data => <HeroMakeBetterMusicView data={data} {...props} />}
  />
)