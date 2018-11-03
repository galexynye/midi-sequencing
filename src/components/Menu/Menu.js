import React from 'react'
import {StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import _ from 'lodash'
import SubMenu from './SubMenu'
import HomeLink from '../HomeLinkLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const MenuContainer = styled.div`
    h2 {
        margin-top: 20px;
        margin-bottom: 20px;
        color: #e76900;
        /* text-decoration: underline; */
    }
    ul{
        list-style-type: circle;
        font-size: 1em;
        
        li{
            margin-left: 25px;
        }
        
    }
    img{
        margin-bottom: 0px;
    }
    button{
        border: none;
        background-color: white;
        &:hover{
            cursor:pointer
        }
        @media (min-height: 1430){
        display: none;
        }
    }
    
`
const MenuSmallWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    
    overflow-y: scroll;
     @media(min-width: 1430px){
        display: none;
    }
    @media(max-width: 700px){
        min-width: 100vw
    }
    ul{
        margin-left: 10px;
    }
    /* button{
        position: absolute;
        top: 0;
        left: 0;
    } */
`

const MenuMobile = styled.div`
    min-height: 100vh;
    background: #fdfdfd;
    z-index: 1000;
    padding-bottom: 20px;
    img{
        margin-top: 40px;
        max-width: 200px;
    }
    > * {
        margin-left: 20px;
        margin-right: 25px;
    }

    button{
        margin: 0px;
    }

`

const BarsButton= styled.button`
    position: fixed;
    top: 0;
    left: 0;
    padding: 5px 15px;
    @media(min-width: 1430px){
        display: none;
    }
`


const MenuLargeWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    /* margin-top: 50px; */
    overflow-y: scroll;
    @media (max-width: 1430px){
        display: none;  
    }

`

const MenuLarge = styled.div`
    max-width: 250px;
    margin-top: 50px;
    margin-right: 30px;
    margin-left: 30px; 
`



/* Categories get parsed into Objects where each subcategory is a property.
The subcategory properties' values are an array of the posts that are in that subcategory, represented
as an object with {title, link}
ie subTutorials = {Basics: [{title: "Post1", link: "/blog/post1"}]}
*/
// const Menu = ({data})=>{
class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayMobile: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            displayMobile: !this.state.displayMobile
        })
        
    }
    render(){
        console.log(this.state.displayMobile)
        const posts = this.props.data.allMarkdownRemark.edges
        let tutorials = posts.filter(post => post.node.frontmatter.category == "Tutorials" )
        let gearReviews = posts.filter(post => post.node.frontmatter.category == "Gear Reviews")
  // Category objects (Each property is a subcategory, see notes above)
        let subTutorials = {}
        let subGearReviews = {}
  // Parses the posts into subCategory Objects
        posts.forEach(post => {
            let link = post.node.fields.slug
            let title = post.node.frontmatter.title
            let subCategory = post.node.frontmatter.subcategory 
            if (post.node.frontmatter.category == "Tutorials"){
                if (subTutorials.hasOwnProperty(subCategory)){
                    subTutorials[subCategory].push({title, link})
                } else {
                    subTutorials[subCategory] = [{title, link}]
                }
            } else if (post => post.node.frontmatter.category == "Gear Reviews"){
                if (subGearReviews.hasOwnProperty(subCategory)) {
                    subGearReviews[subCategory].push({ title, link })
                } else {
                    subGearReviews[subCategory] = [{ title, link }]
                }
            }
        })
    // Returns and Array of SubMenu Components to be rendered in menu
        tutorials =  Object.keys(subTutorials).map(function (key) {
            return <SubMenu title={key} links={subTutorials[key]} key={key}></SubMenu>
            })

        gearReviews = Object.keys(subGearReviews).map(function (key) {
            return <SubMenu title={key} links={subGearReviews[key]} key={key}></SubMenu>
        })

        const MobileMenu = 
            <MenuMobile >
                <BarsButton onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </BarsButton>   
                <HomeLink onClick={this.handleClick}/>
                <h2>Tutorials</h2>
                <ul>
                    {tutorials}
                </ul>
                <h2>Gear Reviews</h2>
                <ul>
                    {gearReviews}
                </ul>
            </MenuMobile>
        const Bars = <BarsButton onClick={this.handleClick}>
                            <FontAwesomeIcon icon={faBars} />
                    </BarsButton>
        return(
            <MenuContainer>
                    <MenuLargeWrapper>
                    <MenuLarge>
                        <HomeLink />
                        <h2>Tutorials</h2>
                        <ul>
                            {tutorials}
                        </ul>
                        <h2>Gear Reviews</h2>
                        <ul>
                            {gearReviews}
                        </ul>
                    </MenuLarge>
                    </MenuLargeWrapper>
                    <div>
                        {!this.state.displayMobile && Bars}
                    </div>
                    {this.state.displayMobile && 
                        <MenuSmallWrapper>
                            {MobileMenu}
                        </MenuSmallWrapper>
                    }            
             </MenuContainer>
        )
    }
}



export default (props)=> (
    
    <StaticQuery
        query = {graphql`
        query{
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], 
                order: DESC }) {
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
        render = { data => <Menu data={data} {...props} />}
    />
   
)

