import React from 'react'
import axios from 'axios'
import { FormHeader } from "../02_molecule/FormHeader";
import { WidthWrapper } from "../02_molecule/WidthWrapper";
import { InputString } from "../01_atom/InputString";
import { InputSubmit } from "../01_atom/InputSubmit";
import { msTheme } from "../../styles/Theme";
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

export class FormEbook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            success: false,
            error: false,
            loading: false,
        }
    }
    _handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    /* Submit to lamda api, be sure to include origin along with email address */
    _handleSubmit = (event) => {
        event.preventDefault()
        axios.post(subscribeApi, {
            email: this.state.email,
            origin: 'UPWebook' // This origin string MUST REFLECT an origin on the backend in the email object in the emails.js file
        })
            .then((response) => {
                this.setState({ email: '' })
                console.log(response);
            })
            .catch((error) => {
                this.setState({ email: '' })
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <FormHeader title="The Ultimate Producer's Workflow" subtitle="How to FINISH Pro Quality Music : Doing EVERYTHING Yourself" />
                <form onSubmit={this._handleSubmit}>
                    <WidthWrapper width="350px">
                        <InputString type="email" value={this.state.email} _handleChange={this._handleChangeEmail} placeholder="Enter your Email..." />
                        <InputSubmit value="SEND A COPY" _handleSubmit={this._handleSubmit} bgColor={msTheme.colors.green} />
                    </WidthWrapper>
                </form>
                {/* <ButtonCTA text={'Send the Ultimate Producer\'s Workflow'} /> */}
            </div>
        )
    }
}





