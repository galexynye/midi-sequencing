import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import _ from 'lodash'
import SubMenu from './SubMenu'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Social from '../Social'
import MailSignUp from '../MailSignUp'
import HeaderButton from '../HeaderButton'
import MSLogo from '../../assets/MusicSeq-Logo_200px.png'
import HomeLink from '../HomeLinks/HomeLinkLogo'
import TopNav from './TopNav'

const MenuContainer = styled.nav`
  z-index: 10;
  ul {
    list-style-type: none;
    font-size: 1em;
    list-style-position: outside;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 0px;
    li {
      margin-top: 10px;
      margin-bottom: 10px;
      /* margin-left: 20px; */
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
    @media (min-height: 900) {
      display: none;
    }
  }
`

// SMALL MENU STYLING
const MenuSmallWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 41px;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 700px) {
    min-width: 100vw;
  }
`

const MenuMobile = styled.div`
  min-height: calc(100vh - 40px);
  background: #fdfdfd;
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

// DESKTOP MENU STYLING
const MenuLargeWrapper = styled.div`
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  overflow-y: scroll;

  @media (max-width: 900px) {
    display: none;
  }
`

const MenuLarge = styled.div`
  width: 225px;
  margin-top: 20px;
  margin-right: 30px;
  margin-left: 30px;
`

const MenuLinksWrapper = styled.div`
  display: flex;
  flex-flow: column;
`
const SubMenus = styled.div`
  margin-left: 10px;
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
      displayTutorials: true,
      displayGearReviews: true,
    }
    this._handleClick = this._handleClick.bind(this)
    this._toggleTutorials = this._toggleTutorials.bind(this)
    this._toggleGearReviews = this._toggleGearReviews.bind(this)
  }

  _handleClick() {
    this.setState({
      displayMobile: !this.state.displayMobile,
    })
  }

  _toggleTutorials() {
    this.setState({
      displayTutorials: !this.state.displayTutorials,
    })
  }
  _toggleGearReviews() {
    this.setState({
      displayGearReviews: !this.state.displayGearReviews,
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
        <MenuLinksWrapper>
          <HeaderButton onClick={this._toggleTutorials} inputColor="#e76900">
            Tutorials
          </HeaderButton>
          {this.state.displayTutorials && <SubMenus>{tutorials}</SubMenus>}
          {/* <ul style={{ marginTop: '-10px' }}>{tutorials}</ul> */}
          <HeaderButton onClick={this._toggleGearReviews} inputColor="#adaa08">
            Gear Reviews
          </HeaderButton>
          {this.state.displayGearReviews && <SubMenus>{gearReviews}</SubMenus>}
          {/* <ul style={{ marginTop: '-10px' }}>{gearReviews}</ul> */}
          <Link to={`/lessons`}>
            <HeaderButton inputColor="#00ce78">Lessons</HeaderButton>
          </Link>
          <a href="mailto:midisequencingdotcom@gmail.com">
            <HeaderButton inputColor="#1f8cd1">Contact</HeaderButton>
          </a>
          <Link to="/privacy-policy">
            {' '}
            <HeaderButton inputColor="#af0069">Privacy Policy</HeaderButton>
          </Link>
          <MailSignUp />
          <Social size="1x" margin="5px 0px 0px 1px" />
        </MenuLinksWrapper>
      )
    }

    const MobileMenu = (
      <MenuMobile>
        {/* <HomeLink onClick={this._handleClick} /> */}
        <MenuLinks />
      </MenuMobile>
    )

    return (
      <div>
        <TopNav
          displayMobile={this.state.displayMobile}
          toggleMobile={this._handleClick}
        />
        <MenuContainer>
          <MenuLargeWrapper>
            <MenuLarge>
              {/* <HomeLink width="150px" /> */}
              <MenuLinks />
            </MenuLarge>
          </MenuLargeWrapper>
          {this.state.displayMobile && (
            <MenuSmallWrapper>{MobileMenu}</MenuSmallWrapper>
          )}
        </MenuContainer>
      </div>
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
