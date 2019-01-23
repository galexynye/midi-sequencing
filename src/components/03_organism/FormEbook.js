import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FormHeader } from "../02_molecule/FormHeader";
import { WidthWrapper } from "../02_molecule/WidthWrapper";
import { InputString } from "../01_atom/InputString";
import { InputSubmit } from "../01_atom/InputSubmit";
import { msTheme } from "../../styles/Theme";
import { Loading } from '../01_atom/Loading';
import { Message } from "../01_atom/Message";
import { ButtonCTA } from '../01_atom/ButtonCTA';
/*

Atoms
// Generic Caption Paragraph or something, block quote
// Catpcha - Eventually
// Loading Component
// Success Message Component
// Failure Message Component

Molecules 
// Wrapper for Button and Email 
// Wrapper Header and Subheader - Probably can be the same one


*/

const subscribeApi = process.env.MS_API_SUBSCRIBE

export const FormEbookStyle = styled.div`
    max-width: 100%;
    form {
        display: flex;
        flex-flow: column;        
        justify-content: center;
        align-items: center;
    }
`

export class FormEbook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            showForm: true,
            success: false,
            error: false,
            loading: false,
        }
    }
    // Updates Email State
    _handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    /* Submit to lamda api, be sure to include origin along with email address */
    _handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.email) {
            this.setState({
                showForm: false,
                loading: true
            })
            axios.post(subscribeApi, {
                email: this.state.email,
                origin: 'UPWebook' // This origin string MUST REFLECT an origin on the backend in the email object in the emails.js file
            })
                .then((response) => {
                    this.setState({
                        email: '',
                        loading: false,
                        success: true
                    })
                    console.log(response);
                })
                .catch((error) => {
                    this.setState({
                        email: '',
                        loading: false,
                        error: true
                    })
                    console.log(error);
                });
        }
    }

    _resetState = () => {
        this.setState({
            email: '',
            showForm: true,
            success: false,
            error: false,
            loading: false,
        })
    }

    render() {
        // Ebook Interactive
        const EbookFormInteraction = <form onSubmit={this._handleSubmit}>
            <WidthWrapper width="350px">
                <InputString type="email" value={this.state.email} _handleChange={this._handleChangeEmail} placeholder="Enter your Email..." />
                <InputSubmit value="Send me a FREE Ebook" _handleSubmit={this._handleSubmit} bgColor={msTheme.colors.green} />
            </WidthWrapper>
        </form>

        const Oops = <WidthWrapper width="350px">
            <Message title="Oops..." message="Something went wrong." />
            <ButtonCTA _handleClick={this._resetState} text="Click to reload Ebook Offer" bgColor={msTheme.colors.secondarylighter} />
        </WidthWrapper>

        return (
            <FormEbookStyle>
                <FormHeader title="The Ultimate Producer's Workflow" subtitle="How to FINISH Pro Quality Music : Doing EVERYTHING Yourself" />
                {this.state.showForm && EbookFormInteraction}
                {this.state.loading && <Loading text="Sending..." />}
                {this.state.success && <Message title="Success!" message="Your Ebook download link is on the way :)" />}
                {this.state.error && Oops}

            </FormEbookStyle>
        )
    }
}





