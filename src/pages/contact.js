import React, { PureComponent } from 'react'
import axios from 'axios'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import Recaptcha from 'react-recaptcha'
import { msTheme } from '../styles/Theme'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import { GridContainer, WidthWrapper } from "../components/00_utilities/Utilities";
import { PageTitle } from "../components/01_atom/PageTitle";
import { InputString } from "../components/01_atom/InputString";
import { InputSubmit } from '../components/01_atom/InputSubmit';
import { InputTextarea } from '../components/01_atom/InputTextarea';
import { InputSelect } from '../components/01_atom/InputSelect';
import { Loading } from '../components/01_atom/Loading'
import { Message } from '../components/01_atom/Message'
import { ButtonCTA } from '../components/01_atom/ButtonCTA'

const contactOptions = ['General Questions', 'Suggestion for Library', 'Saying hi!', 'Want to work together?', 'Will you review our product?', 'Website Suggestions', 'Other']
const recaptchaKey = process.env.RECAPTCHA_KEY
const contactApi = process.env.MS_API_CONTACT

export default class contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            subject: 'General Questions',
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
        event.preventDefault();
        if (!this.state.recaptcha) {
            alert("Please confirm you're not a robot.")
        } else {
            this.setState({
                form: false,
                loading: true
            })
            axios.post(contactApi, {
                email: this.state.email,
                name: this.state.name,
                subject: this.state.subject,
                message: this.state.message,
                origin: 'contactForm' // Very important that this matches the Backend API emails object
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

    _verifyHuman = () => { // this should be async function that triggers a lambda on the backend to verify the captcha. then once the response is valid, set to true.
        this.setState({
            recaptcha: true
        })
    }

    _resetState = () => {
        this.setState({
            email: '',
            name: '',
            subject: 'General Questions',
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
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const Oops = <WidthWrapper width="350px">
            <Message title="Oops..." message="Something went wrong." />
            <ButtonCTA _handleClick={this._resetState} text="Click to reload Music Services Form" bgColor={msTheme.colors.secondarylighter} />
        </WidthWrapper>


        const ContactForm = <div>
            <form onSubmit={this._handleSubmit}>
                <InputString _handleChange={this._handleInputChange} value={this.state.name} type="text" label="name" labelText="Name*" required={true}></InputString>
                <InputString _handleChange={this._handleInputChange} value={this.state.email} type="email" label="email" labelText="Email*" required={true}></InputString>
                <InputSelect _handleChange={this._handleInputChange} value={this.state.subject} options={contactOptions} label="subject" labelText="Subject" />
                <InputTextarea _handleChange={this._handleInputChange} value={this.state.message} label="message" labelText="Message*" required={true} />
                <InputSubmit onSubmit={this._handleSubmit} value="Contact Me" bgColor={msTheme.colors.primary} color="white" />
            </form>
            <p className="headerFont">Please verify you are not a robot before contacting.</p>
            <Recaptcha
                sitekey={recaptchaKey}
                render="explicit"
                onloadCallback={this._recaptchaLoaded}
                verifyCallback={this._verifyHuman}
            />
        </div>

        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Contact Music Sequencing, make suggestions or hire me' }]}
                    title={`Contact | ${siteTitle}`}
                >
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                </Helmet>
                <PageTitle text="Contact" />
                <ArticleContainer margin="30px auto 30px auto">
                    {this.state.loading && <Loading text="Sending..." />}
                    {this.state.success && <Message title="Success!" colorHeader={msTheme.colors.primary} message="Thanks for reaching out, a confirmation email should arrive shortly!" />}
                    {this.state.error && Oops}
                    {this.state.form && ContactForm}
                </ArticleContainer>
            </SiteContainer>
        )
    }
}



export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`


