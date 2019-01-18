import React from 'react'
import styled from 'styled-components'
import HomeLink from '../HomeLinks/HomeLinkLogo'
import HomeLinkCircle from '../HomeLinks/HomeLinkLogoOnly'
import Social from '../Social'
import MobileToggle from './MobileToggle'

const TopNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  height: 50px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 5;
  @media (max-width: 900px) {
    height: 40px;
    justify-content: flex-start;
    /* display: inline-block; */
  }
`

const TopNav = props => {
  return (
    <TopNavWrapper>
      <MobileToggle
        displayMobile={props.displayMobile}
        toggleMobile={props.toggleMobile}
      />
      <HomeLink width="200px" margin="10px 0px 0px 30px" displayMobile="none" />
      <HomeLinkCircle
        width="30px"
        margin="5px 0px 0px -20px"
        displayBreak="none"
      />
      <Social margin="0px 20px 0px 0px" displayMobile="none" />
    </TopNavWrapper>
  )
}

export default TopNav
