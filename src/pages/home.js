import React from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'

import { HeroHome } from "../components/04_template/HeroHome";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // babaShow: false // Page State
        }
        // this._handleClick = this._handleClick.bind(this)
    }
    // _handleClick() {
    //     this.setState({
    //         babaShow: !this.state.babaShow,
    //     })
    // }
    render() {
        return (
            <SiteContainer>
                <HeroHome />

            </SiteContainer>
        )
    }
}

export default Home

