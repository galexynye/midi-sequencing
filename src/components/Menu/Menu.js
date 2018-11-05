import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import _ from 'lodash'
import SubMenu from './SubMenu'
import HomeLink from '../HomeLinkLogo'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Social from '../Social'
import MailSignUp from '../MailSignUp'

const MenuContainer = styled.div`
  h2 {
    margin-top: 30px;
    margin-bottom: 30px;
    color: #e76900;
  }
  h3 {
    margin: 0px 0px;
  }
  ul {
    list-style-type: circle;
    font-size: 1em;
    list-style-position: outside;
    margin-top: 5px;
    li {
      margin-left: 25px;
    }
  }
  img {
    margin-bottom: 0px;
  }
  button {
    border: none;
    background-color: #ffffff00;
    &:hover {
      cursor: pointer;
    }
    @media (min-height: 1200) {
      display: none;
    }
  }
`

// SMALL MENU STYLING
const MenuSmallWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  @media (min-width: 1200px) {
    display: none;
  }
  @media (max-width: 700px) {
    min-width: 100vw;
  }
`

const MenuMobile = styled.div`
  min-height: 100vh;
  background: #fdfdfd;
  z-index: 1000;
  /* padding-bottom: 20px; */
  ul {
    margin-left: 0px;
    li {
      margin-left: 35px;
    }
  }
  padding: 20px 20px;
  img {
    margin-top: 40px;
    max-width: 200px;
  }
  button {
    margin: 0px;
  }
`

const BarsButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 15px;
  @media (min-width: 1200px) {
    display: none;
  }
`
// DESKTOP MENU STYLING
const MenuLargeWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  @media (max-width: 1200px) {
    display: none;
  }
`

const MenuLarge = styled.div`
  max-width: 250px;
  margin-top: 50px;
  margin-right: 30px;
  margin-left: 30px;
`

//END MENU STYLING

/* 
How The Menu Works 
Categories get parsed into Objects where each subcategory is a property.
The subcategory properties' values are an array of the posts that are in that subcategory, represented
as an object with {title, link}
ie subTutorials = {Basics: [{title: "Post1", link: "/blog/post1"}]}
*/

// Menu
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMobile: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      displayMobile: !this.state.displayMobile,
    })
  }
  render() {
    console.log(this.state.displayMobile)
    const posts = this.props.data.allMarkdownRemark.edges
    let tutorials = posts.filter(
      post => post.node.frontmatter.category == 'Tutorials'
    )
    let gearReviews = posts.filter(
      post => post.node.frontmatter.category == 'Gear Reviews'
    )
    // Category objects (Each property is a subcategory, see notes above)
    let subTutorials = {}
    let subGearReviews = {}
    // Parses the posts into subCategory Objects
    posts.forEach(post => {
      let link = post.node.fields.slug
      let title = post.node.frontmatter.title
      let subCategory = post.node.frontmatter.subcategory
      if (post.node.frontmatter.category == 'Tutorials') {
        if (subTutorials.hasOwnProperty(subCategory)) {
          subTutorials[subCategory].push({ title, link })
        } else {
          subTutorials[subCategory] = [{ title, link }]
        }
      } else if (post => post.node.frontmatter.category == 'Gear Reviews') {
        if (subGearReviews.hasOwnProperty(subCategory)) {
          subGearReviews[subCategory].push({ title, link })
        } else {
          subGearReviews[subCategory] = [{ title, link }]
        }
      }
    })

    // Returns and Array of SubMenu Components to be rendered in menu
    tutorials = Object.keys(subTutorials).map(function(key) {
      return <SubMenu title={key} links={subTutorials[key]} key={key} />
    })

    gearReviews = Object.keys(subGearReviews).map(function(key) {
      return <SubMenu title={key} links={subGearReviews[key]} key={key} />
    })

    // Menu Links Rendered in Both Menus
    const MenuLinks = () => {
      return (
        <div>
          <h2>Tutorials</h2>
          <ul>{tutorials}</ul>
          <h2 style={{ color: '#adaa08' }}>Gear Reviews</h2>
          {/* <h2 style={{ color: '#1f8cd1' }}>Gear Reviews</h2> */}
          <ul>{gearReviews}</ul>
          <Link to={`/lessons`}>
            <h2 style={{ color: '#00ce78' }}>Lessons</h2>
          </Link>
          <a href="mailto:midisequencingdotcom@gmail.com">
            <h2 style={{ color: '#1f8cd1' }}>Contact</h2>
          </a>

          <Link to="/privacy-policy">
            {' '}
            <h2 style={{ color: '#af0069' }}>Privacy Policy</h2>
          </Link>

          {/* <MailSignUp /> */}
          <Social size="2x" />
        </div>
      )
    }

    const MobileMenu = (
      <MenuMobile>
        <BarsButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faTimes} />
        </BarsButton>
        <HomeLink onClick={this.handleClick} />
        <MenuLinks />
      </MenuMobile>
    )
    // Hamburger Button For Menu Expansion on Mobile
    const Bars = (
      <BarsButton onClick={this.handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </BarsButton>
    )

    return (
      <MenuContainer>
        <MenuLargeWrapper>
          <MenuLarge>
            <HomeLink />
            <MenuLinks />
          </MenuLarge>
        </MenuLargeWrapper>
        <div>{!this.state.displayMobile && Bars}</div>
        {this.state.displayMobile && (
          <MenuSmallWrapper>{MobileMenu}</MenuSmallWrapper>
        )}
      </MenuContainer>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
                subcategory
                company
                subject
              }
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props} />}
  />
)
