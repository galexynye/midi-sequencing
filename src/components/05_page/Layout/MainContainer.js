import React from 'react'
import styled from 'styled-components'

//Moves the entire site around for drop downs, sidebars ect
// This will need to have state as well to move shit around depending on state given 
// to it by the SiteContainer

// const MainContainer = styled.div`
//     /* color: red; */
// `

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: this.props.mobileMenuOpen
        }
    }

    render() {
        const { children } = this.props
        return (
            <div>{children} </div>
        )
    }
}




export default MainContainer