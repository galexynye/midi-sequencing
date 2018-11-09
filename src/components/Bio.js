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
        <p>Gear Reviews and Music (Production) Tutorials</p>
        {/* <div
          className="marTSmall"
          style={{
            textAlign: 'center',
          }}
        >
          <Social size="1x" />
        </div> */}
      </BioWrapper>
    )
  }
}

export default Bio
