import React, { PureComponent } from 'react'
import { msTheme } from '../../styles/Theme'
import { InputString } from "../01_atom/InputString";
import { InputSelect } from "../01_atom/InputSelect";
import { InputTextarea } from "../01_atom/InputTextarea";
import { InputSubmit } from '../01_atom/InputSubmit'



export class FormServices extends PureComponent {

    render() {
        const { _handleInputChange, _handleSubmit, email, name, service, budget, servicesOptions, message, deadline } = this.props
        return (
            <form onSubmit={_handleSubmit}>
                <InputString _handleChange={_handleInputChange} value={name} type="text" label="name" labelText="Name*" required={true}></InputString>
                <InputString _handleChange={_handleInputChange} value={email} type="email" label="email" labelText="Email*" required={true}></InputString>
                <InputSelect _handleChange={_handleInputChange} value={service} options={servicesOptions} label="service" labelText="What needs done?" />
                <InputString _handleChange={_handleInputChange} value={deadline} type="date" label="deadline" labelText="Deadline (if applicable)" ></InputString>
                <InputString _handleChange={_handleInputChange} value={budget} type="text" label="budget" labelText="Budget" ></InputString>
                <InputTextarea _handleChange={_handleInputChange} value={message} label="message" labelText="Please describe your project*" required={true} />
                <InputSubmit _handleSubmit={_handleSubmit} value="Request Booking" bgColor={msTheme.colors.primary} color="white" />
            </form>
        )
    }
}
