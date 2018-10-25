import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import _ from 'lodash'
import SubMenu from './SubMenu'

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 70px;
    overflow-y: scroll;
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
    @media (max-width: 1430px){
        display: none;
     
    }
`

const MenuWrapper = styled.div`
    position: relative;
    max-width: 225px;
    margin-left: 40px;
    margin-right: 30px;
`


// const SubMenu = ()=> (<div>Hello</div>)

/* Categories get parsed into Objects where each subcategory is a property.
The subcategory properties' values are an array of the posts that are in that subcategory, represented
as an object with {title, link}
ie subTutorials = {Basics: [{title: "Post1", link: "/blog/post1"}]}
*/
const Menu = ({data})=>{
    const posts = data.allMarkdownRemark.edges
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

    tutorials =  Object.keys(subTutorials).map(function (key) {
            return <SubMenu title={key} links={subTutorials[key]}></SubMenu>
        })
    
 

    gearReviews = Object.keys(subGearReviews).map(function (key) {
        return <SubMenu title={key} links={subGearReviews[key]}></SubMenu>
    })
    
    return(
        <div>
            {/* {data.allMarkdownRemark.edges[0].node.frontmatter.category} */}
            <MenuWrapper>
                <h2>Tutorials</h2>
                <ul>
                    {tutorials}
                </ul>
                <h2>Gear Reviews</h2>
                <ul>
                    {gearReviews}
                </ul>            
            </MenuWrapper>
        </div>
    )
}



export default (props)=> (
    <MenuContainer>
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
        render = {data=> <Menu data={data} {...props} />}
    />
    </MenuContainer>
)

