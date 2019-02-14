import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Title } from "../02_molecule/Title";
import { WidthWrapper, FlexboxOrganism } from "../00_utilities/Utilities";
import { InputStringNoLabel } from "../01_atom/InputStringNoLabel";
import { InputSubmit } from "../01_atom/InputSubmit";
import { msTheme } from "../../styles/Theme";
import { Loading } from '../01_atom/Loading';
import { Message } from "../01_atom/Message";
import { ButtonCTA } from '../01_atom/ButtonCTA';
/*

Ebook Sender

*/

const subscribeApi = process.env.MS_API_SUBSCRIBE

export const FormEbookContainer = styled.div`
    max-width: 100%;    
    
    form {
        display: flex;
        flex-flow: column;        
        justify-content: space-between;
        align-items: center;
    }
`





export class FormEbook extends React.PureComponent {
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
                    // console.log(response);
                })
                .catch((error) => {
                    this.setState({
                        email: '',
                        loading: false,
                        error: true
                    })
                    // console.log(error);
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

    // Note These messages and stuff should be set as props for the most part

    render() {
        const { title, subtitle, formWidth, color, marginTitle, titleHeight, formHeight, fontSize, fontSizeSmall, lineHeight, lineHeightSmall } = this.props
        // Ebook Interactive
        const EbookFormInteraction = <form onSubmit={this._handleSubmit}>
            <WidthWrapper width={formWidth}>
                <InputStringNoLabel type="email" value={this.state.email} _handleChange={this._handleChangeEmail} placeholder="Enter your Email..." paddingInput="0px" marginInput="0px" border="none" />
                <InputSubmit value="Get a FREE eBook" _handleSubmit={this._handleSubmit} bgColor={msTheme.colors.greenlight} />
            </WidthWrapper>
        </form>

        const Oops = <WidthWrapper width="350px">
            <Message title="Oops..." colorHeader="white" colorMessage="white" message="Something went wrong." />
            <ButtonCTA _handleClick={this._resetState} text="Click to reload Ebook Offer" bgColor={msTheme.colors.secondarylighter} />
        </WidthWrapper>

        return (
            <FormEbookContainer titleHeight={titleHeight} >

                {title && <Title title={title} subtitle={subtitle} marginTitle={marginTitle} fontSize={fontSize} fontSizeSmall={fontSizeSmall} lineHeight={lineHeight} lineHeightSmall={lineHeightSmall} />}


                {this.state.showForm && EbookFormInteraction}
                {this.state.loading && <Loading text="Sending..." textColor="white" />}
                {this.state.success && <Message title="Success!" colorHeader={msTheme.colors.greenlight} colorMessage="white" message="Your Ebook download link is on the way :)" />}
                {this.state.error && Oops}

            </FormEbookContainer>
        )
    }
}





