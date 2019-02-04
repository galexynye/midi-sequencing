
import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { HeroService } from '../components/04_template/HeroServices'
import { ServicesCards } from "../components/03_organism/ServicesCards";
import { FormServices } from '../components/03_organism/FormServices'




const CardTopTitle = styled.h2`
    margin: 10px 0px;
    ${msTheme.mediaquery().medium}{
        display: none;
    }
`

class Services extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            service: '--Select--',
            budget: '',
            date: '',
            message: '',
            recaptcha: false
        }
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    _handleSubmit = () => {

    }

    _resetState = () => {
        this.setState({
            email: '',
            name: '',
            service: '--Select--',
            budget: '',
            date: '',
            message: '',
            recaptcha: false
        })
    }

    render() {

        const servicesOptions = ['--Select--', 'Custom Music', 'Mixing', 'Mastering', 'Producing', 'Licensing', 'So many things', 'Other']

        return (
            <SiteContainer headerPosition="absolute">
                <HeroService />
                <ServicesCards />
                <FormServices
                    _handleInputChange={this._handleInputChange}
                    email={this.state.email}
                    name={this.state.name}
                    service={this.state.service}
                    servicesOptions={servicesOptions}
                    message={this.state.message}
                />
            </SiteContainer>
        )
    }
}

export default Services

