import React, { PureComponent } from 'react'
import axios from 'axios'
import { FormServices } from '../03_organism/FormServices'
import styled from 'styled-components'
import Recaptcha from 'react-recaptcha'
import { WidthWrapper, GridContainer } from '../00_utilities/Utilities'
import { msTheme } from '../../styles/Theme'
import { Loading } from '../01_atom/Loading'
import { Message } from '../01_atom/Message'
import { ButtonCTA } from '../01_atom/ButtonCTA'

const recaptchaKey = process.env.RECAPTCHA_KEY
const contactApi = process.env.MS_API_CONTACT

export class ServicesForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            service: '--Select--',
            budget: '',
            deadline: '',
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        }
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.recaptcha) {
            this.setState({
                noRoboConfirm: true
            })
            alert("Please confirm you're not a robot.")
        } else {
            this.setState({
                form: false,
                loading: true
            })
            axios.post(contactApi, {
                email: this.state.email,
                name: this.state.name,
                service: this.state.service,
                budget: this.state.budget,
                deadline: this.state.deadline,
                message: this.state.message,
                origin: 'serviceForm' // Very important that this matches the Backend API emails object
            }).then((response) => {
                this.setState({
                    success: true,
                    loading: false
                })
                // console.log(response);
            })
                .catch((error) => {
                    this.setState({
                        error: true,
                        loading: false
                    })

                    // console.log(error);
                });
        }
    }

    _recaptchaLoaded = () => {
        this.setState({
            recaptchaLoaded: true
        })
    }

    _verifyHuman = () => {
        this.setState({
            recaptcha: true
        })
    }

    _resetState = () => {
        this.setState({
            email: '',
            name: '',
            service: '--Select--',
            budget: '',
            deadline: '',
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        })
    }

    render() {
        const servicesOptions = ['--Select--', 'Custom Music', 'Mixing', 'Mastering', 'Producing', 'Licensing', 'I want help learning music', 'So many things', 'Other']

        // Error Message Component
        const Oops =
            <WidthWrapper width="350px" margin="0px">
                <Message title="Oops..." message="Something went wrong." />
                <ButtonCTA _handleClick={this._resetState} text="Click to reload Music Services Form" bgColor={msTheme.colors.secondarylighter} />
            </WidthWrapper>

        // Services form 
        const ServicesForm =
            <div className="mB40">
                <FormServices
                    _handleInputChange={this._handleInputChange}
                    _handleSubmit={this._handleSubmit}
                    email={this.state.email}
                    name={this.state.name}
                    service={this.state.service}
                    servicesOptions={servicesOptions}
                    message={this.state.message}
                    deadline={this.state.deadline}
                    budget={this.state.budget}
                />
                {this.state.noRoboConfirm && <p className="headerFont">Please confirm you are not a robot below.</p>}
                <Recaptcha
                    sitekey={recaptchaKey}
                    render="explicit"
                    onloadCallback={this._recaptchaLoaded}
                    verifyCallback={this._verifyHuman}
                />
            </div>

        // Service form Section With render logic / loading / success or error
        // const CompleteFormProcess =

        return (
            <GridContainer className="mT60" gTC=" 1fr" gTCL="1fr" gTCM="1fr" id="requestBooking">
                <div>
                    <h2 className="colorPrimary mB40">Request a booking</h2>
                    {this.state.loading && <Loading text="Sending..." />}
                    {this.state.success && <Message title="Success!" colorHeader={msTheme.colors.primary} message="Thanks for reaching out, a confirmation email should arrive shortly!" />}
                    {this.state.error && Oops}
                    {this.state.form && ServicesForm}
                </div>
            </GridContainer>
        )
    }
}
