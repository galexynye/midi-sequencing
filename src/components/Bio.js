import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const BioWrapper = styled.div`
  display: flex;
  flex-flow: column;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <p>Gear Reviews, Tutorials, and 1-on-1 Lessons</p>
      </BioWrapper>
    )
  }
}

export default Bio
