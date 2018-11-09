import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const CardContainer = styled.div`
  box-sizing: border-box;
  width: calc(100% / 3 - 10px);
  /* padding: 15px; */
  margin: 5px 10px 5px 0px;
  text-align: center;
  border: 1px solid #efefef;
  /* border-radius: 10px; */
  h2 {
    color: #700bea;
  }
  p {
    padding: 0px 10px;
  }
  @media (max-width: 1500px) {
    /* width: 450px; */
  }
  @media (max-width: 1350px) {
    width: calc(100% / 2 - 10px);
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`

const TitleContainer = styled.div`
  height: 80px;
  padding: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: 0px;
    /* height: 100%; */
    border: 0;
    /* height: 150px */
  }
`

const LandingCard = props => {
  return (
    <CardContainer>
      <Link to={props.link}>
        <ImgContainer>
          <img src={props.image} alt="" />
        </ImgContainer>
        {/* picture */}
        <TitleContainer>
          <h2>{props.title}</h2>
        </TitleContainer>
      </Link>
      <p>{props.caption}</p>

      {/* title / link */}
      {/* description */}
    </CardContainer>
  )
}

export default LandingCard
