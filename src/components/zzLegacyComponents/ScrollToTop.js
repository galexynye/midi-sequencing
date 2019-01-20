import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Link from 'gatsby'



const ScrollTop = styled.button`
  position: fixed;
  bottom: 10px;
  right: 20px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  color: #700bea;
  @media (max-width: 700px) {
    right: 10px;
    bottom: 10px;
  }
`

class ScrollToTop extends React.Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0,
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <ScrollTop
        onClick={() => {
          this.scrollToTop()
        }}
      >
        <FontAwesomeIcon id="up-arrow" icon={faAngleUp} size="2x" />
      </ScrollTop>
    )
  }
  componentDidMount() {
    document.getElementById('up-arrow').style.display = 'none'
    function scrollFunction() {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        document.getElementById('up-arrow').style.display = 'block'
      } else {
        document.getElementById('up-arrow').style.display = 'none'
      }
    }
    window.onscroll = function scrollShow() {
      scrollFunction()
    }
  }
}

export default ScrollToTop
