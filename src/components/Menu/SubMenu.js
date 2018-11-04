import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TitleButton = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 10px 0px;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    height: 30px;
    background: none;
    border: none;
    color: #700bea;
    &:hover {
      cursor: pointer;
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
      <div>
        <TitleButton>
          <button onClick={this.handleButton}>
            {!this.state.showLinks && <FontAwesomeIcon icon={faArrowRight} />}
            {this.state.showLinks && <FontAwesomeIcon icon={faArrowDown} />}
          </button>
          <h3 onClick={this.handleButton}>{this.props.title}</h3>
        </TitleButton>
        <div>
          <ul>{this.state.showLinks && links}</ul>
        </div>
      </div>
    )
  }
}

export default SubMenu
