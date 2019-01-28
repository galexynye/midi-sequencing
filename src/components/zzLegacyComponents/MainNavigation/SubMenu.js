import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

/* About the SubMenu
  Submenu generates the link to the actual articles. 
  It consists of a button that shows or hides the links
*/

const SubMenuWrapper = styled.div`
  /* margin-top: -15px; */
`

const TitleButton = styled.button`
  padding: 0px;
  /* padding-bottom: 10px; */
  text-align: left;
  font-size: 18px;
  background: none;
  border: none;
  color: #2c3e50;
  &:hover {
    cursor: pointer;
  }
`

const SubMenuLinks = styled.ul`
  margin-bottom: 10px !important;
  li {
    font-size: 15px;
    /* Something is wonky with mobile menu */
    margin-left: 10px !important;
    margin-left: -10px;
    a {
      color: #2c62a2;
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
        <TitleButton onClick={this.handleButton}>
          {this.props.title}
        </TitleButton>
        <SubMenuLinks>{this.state.showLinks && links}</SubMenuLinks>
      </SubMenuWrapper>
    )
  }
}

export default SubMenu
