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

# Coding Guildlines
Named Exports except for the `<SiteContainer>` and PAGES!!!!!!!

PAGES created in the pages directory MUST BE DEFAULT EXPORTS

background is shortened to bg when passing props
```
bgColor
```

# Building new Pages 

See the `<SiteContainer>` notes below. All pages are wrapped in the `<SiteContainer>`.

## To create an individual page.
Create a js file in the pages directory. Import a page component from the 05_page directory or create a new page component in the 05_page directory. 

To create a new page component, import the `<SiteContainer>` and start putting stuff in it or create a Class or styled componenent inside the `<SiteContainer>` (or both) for more page options. (look at what's there if confused).

## Programmatically Build Pages 
This is done in the gatsby-node.js file. Follow the directions above, except create or use a page component from the src -> components -> 05_page -> Blueprints directory. Import that into the gatsby-node.js file and do some programming.

See [Gatsby Create Pages Api](https://www.gatsbyjs.org/docs/node-apis/#createPages) for more info.

# `<SiteContainer> ` 
The `<SiteContainer>` can be found in src > components > 05_page > Layout > SiteContainer.js.

This component is the container of every page and includes base CSS, CSS resets, typography, and utility classes(rarely used, utilites are mostly on the msTheme and injected into styled components via interpolated strings). Utility classes are injected globablly via styled component's `{injectGlobal}`.

NOTE: Upgrade eventually to using React's context API with the `<SiteContainer>`. See [This artice](https://medium.freecodecamp.org/how-to-develop-your-react-superpowers-with-the-context-api-61e0ab952c02)

### HeaderPosition
The default header position is static but on hero pages, such as the main page, it needs absolute positioning. This is a prop that is added to the `<SiteContainer>` when creating a new page. 

### Global Injection of Styles
[About Gatsby Global Style Injection problems](https://github.com/gatsbyjs/gatsby/issues/7413)

# `<MainContainer>`
`<MainContainer>` is a componenent that moves the entire site for the mobile nav (for example), or somesort of pop down request for email or whatever. 

NOTE: If building a pop down request, it needs to be added to the `<SiteContainer>` component, OUTSIDE of the `<MainContainer>`

The `<MainContainer>` renders children and props passed down from the `<SiteContainer>`. The `<MainContainer>` is rendered automatically by the `<SiteContainer>` on EVERYPAGE. 

# `<ContentContainer>`
`<ContentContainer>` is located in the 00_Utilities directory. It's great for wrapping a page's content. It is a wrapper within a wrapper, that renders children inside of it. 

Set the width via props 
```
<ContentContainer width={msTheme.widths.article}>
```
and you are good. 

The default paddings is set in the Theme.js on the padding attribute using the globalPadding, ie globalSide, globalSideSmall. ect.

Padding and margins can also be set via props. 

# State

State that is consistent on every single page (but reset on new page load, such as the menu toggle), is held in the `<SiteContainer>` component.

If a certain page needs it's own state, then add it when you build the page sucker fool. Create a Class Component in the 05_page directory, then import it into the javascript file used to create the page in the pages directory.

Redux or Context is not currently implemented for global state.

# Styling this site
## Theme
The styles directory contains the Theme.js file, which includes an object containing the color themes, media breakpoints and any other styling variables.

Most shared utilites, such as between Inputs and Buttons, can be found in the the msTheme.utilities function (in Theme.js) that will return an object of the shared values. 

## Utility Components
### `<ContentContainer>`
### `<ContentContainer>`
### `<WidthWrapper>`

## Styling Components 
Styling components is done inside the components via styled components (similar to Vue architecture) with the aid of global utility classes defined in the `<SiteContainer>` - See above.

Sometimes components share styles, such as Input components. 
In this case Input.js is just a styled component, then in InputString.js, for example, the Input.js is imported and modified / extended as necessary. 

NOTE: ButtonCTA.js is also styled with the Input.js component for consistency. 
Their shared variables are in the Theme.js and can be custamized via props.

## Styling Via Props 

Many reusable components can be customized by their props. 

```
color: ${props => props.color || msTheme.colors.primary};
```
At the component call 
```
<ButtonCTA color="blue" bgColor="red">
```

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



# Gatsby Stuff 

## Running in development
`gatsby develop`

On local network

`gatsby develop -H 192.168.2.103 -p 8000`

## To Build
`gatsby build`

## Build Pages via Code 

In the gatsby-node.js file.

## Static Query 
Static Query is used to do GraphQL queries within components. There are additional limitations with static Queries.

## Link 
[gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/)


# React Stuff 

Default Props
```
// ES6 class
class CatComponent extends React.Component {
    constructor(props) {}
    render() {
        return <div>{props.catName} Cat, Eye Color: {props.eyeColor }, Age: {props.age}</div>
    }
}
CatComponent.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"
}

// or 

class CatComponent extends React.Component {
    constructor(props) {}
    static defaultProps = {
        catName: "Sandy",
        eyeColor: "deepblue",
        age: "120"        
    }
    render() {
        return <div>{props.catName} Cat, Eye Color: {props.eyeColor }, Age: {props.age}</div>
    }
}
```