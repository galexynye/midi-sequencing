import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SubMenuWrapper = styled.div`
  /* margin-left: -13px; */
  padding: 0px;
  ul {
    /* margin-left: -9px; */
  }
`

const TitleButton = styled.div`
  /* display: flex; */
  /* align-items: center; */
  margin-bottom: 15px;
  h3 {
    margin: 20px 0px 20px 0px;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    /* height: 30px; */
    font-size: 20px;
    padding: 0px;
    background: none;
    border: none;
    color: #2c3e50;
    &:hover {
      cursor: pointer;
      color: #2c62a2;
    }
  }
`

const SubMenuLinks = styled.div`
  ul {
    li {
      a {
        /* color: #879394; */
        color: #2c62a2;
        &:hover {
          /* color: #2c62a2; */
          color: #879394;
        }
      }
    }
  }
`

class SubMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLinks: false,
    }
    this.handleButton = this.handleButton.bind(this)
  }
  handleButton() {
    this.setState({
      showLinks: !this.state.showLinks,
    })
  }

  render() {
    let links = this.props.links.map(x => (
      <li key={x.title}>
        <Link to={`${x.link}`}>{x.title}</Link>
      </li>
    ))

    return (
      <SubMenuWrapper>
        <TitleButton>
          {/* <button onClick={this.handleButton}> */}
          {/* {!this.state.showLinks && <FontAwesomeIcon icon={faArrowRight} />} */}
          {/* {this.state.showLinks && <FontAwesomeIcon icon={faArrowDown} />} */}
          {/* </button> */}
          <button onClick={this.handleButton}>{this.props.title}</button>
        </TitleButton>
        <SubMenuLinks>
          <ul>{this.state.showLinks && links}</ul>
        </SubMenuLinks>
      </SubMenuWrapper>
    )
  }
}

export default SubMenu
