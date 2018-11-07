import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu/Menu'
import BGVideo from '../assets/MidiSequencing Title_1_Sound.mp4'

const VideoWrapper = styled.div`
  position: fixed;
  @media (max-width: 900) {
    video {
      display: none;
    }
  }
`

const Lessons = () => {
  return (
    <div>
      <Menu />
      {/* <h1>Lessons</h1>
      <div>Hello</div> */}
      <VideoWrapper>
        <video autoPlay muted loop>
          <source src={BGVideo} type="video/mp4" />
        </video>
      </VideoWrapper>
    </div>
  )
}

export default Lessons
