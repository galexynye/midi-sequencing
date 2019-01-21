# Site Design Principals and Styles

The site tries to follow Atomic Design Principals.

[Atomic Design Book](http://atomicdesign.bradfrost.com/table-of-contents/)

## This site Architecture
```                      
     <SiteContainer> // Renders children, injects base css and reset, holds state use
        <MainContainer> // Moving entire site for sidebars, pop downs, ect
            <PageStyledComponents> // Specific page state and styles(via styled component)
                <Template>          // Page section (Article)
                        <Organism>      // Group of Cards
                            <Molecule>  // A Card
                                <Atom /> // Picture
                                <Atom /> // A Button
                            </Molecule>
                            <Molecule>   
                                <Atom /> 
                                <Atom /> 
                            </Molecule>
                        </Organism>
                </Template>
            <PageStyledComponent>
        
        <MainContainer>
    <SiteContainer> 
</Page>
```


## Outside Example

```
00_base/
├  _root.scss
├  _normalize.scss
└  _typography.scss

01_atom/
└  _a-buttons.scss

02_molecule/
├  _m-teaser.scss
├  _m-menu.scss
└  _m-card.scss

03_organism/
├  _o-teaser-list.scss
└  _o-card-list.scss

04_template/
├  _t-section.scss
└  _t-article.scss

05_page/
├  _p-blog.scss
└  _p-home.scss

style.scss
```
[Code Source](https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving)

# Building new Pages 

src > components > 05_page > PageBuilder.js 

Follow instructions.

To render pages via code, see the Gatsby Stuff section below.

# State
If a certain page needs it's own state, then it is added when a Page from the PageBuilder.js is modified to create a page.

State that is consistent on every single page (but reset on new page load, such as the menu toggle), is held in the `<SiteContainer>` component.

Redux is not currently implemented. 

# Styling this site
## Theme
The styles directory contains the Theme.js file, which includes an object containing the color themes, media breakpoints and any other global styling variables.

## `<SiteContainer> ` For Base Styling and Utility
The `<SiteContainer>` can be found in src > components > 05_page > Layout > SiteContainer.js.

This component is the container of every page and includes base CSS, CSS resets, typography, and utility classes. Utility classes are injected globablly via styled component's `{injectGlobal}`.

[About Gatsby Global Style Injection problems](https://github.com/gatsbyjs/gatsby/issues/7413)

## `<MainContainer>`
`<MainContainer>` is a styled componenent that moves the entire side for the mobile nav (for example), or somesort of pop down request for email or whatever.

## Page Specific Styling

Further styling of a page can be done with a styled component that goes inside of the content container. ie. 
```
<SiteContainer>                 // Holds state, injects base css and reset
    <MainContainer>          // Content Container throughout site
        <PageStyledContainer>   // Styles for the page
            <Template>          // Page section (Article)
                <Organism>      // Group of Cards
                    <Molecule>  // A Card
                        <Atom /> // Picture
                        <Atom /> // A Button
                    </Molecule>
                    <Molecule>   // A Card
                        <Atom /> // Picture
                        <Atom /> // A Button
                    </Molecule>
                </Organism>
            </Template>
        <PageStyledContainer>
    <MainContainer>
<SiteContainer> 
```

## Styling Components 
Styling components is done inside the components via styled components (similar to Vue architecture) with the aid of global utility classes defined in the `<SiteContainer>` - See above

### Props in styled components example 

```
color: ${props => props.inputColor || '#2c3e50'};
```


# Gatsby Stuff 

## Running in development
`gatsby develop`

## To Build
`gatsby build`

## Build Pages via Code 

In the gatsby-node.js file.

## Static Query 
Static Query is used to do GraphQL queries within components. There are additional limitations with static Queries.

## Link 
[gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/)
