import React from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { CTAButton } from '../components/01_atom/ButtonCTA'

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
                <CTAButton text={'Email Me the Ultimate Producer\'s Workflow'} />
            </SiteContainer>
        )
    }
}

export default Home

