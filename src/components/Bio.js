import React from 'react'
import Social from './Social'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
        }}
      >
        <p
          style={{
            marginTop: '0px',
            marginBottom: '0px',
            textAlign: 'center',
          }}
        >
          Gear Reviews and Music (Production) Tutorials
        </p>
        {/* <div
          className="marTSmall"
          style={{
            textAlign: 'center',
          }}
        >
          <Social size="1x" />
        </div> */}
      </div>
    )
  }
}

export default Bio
